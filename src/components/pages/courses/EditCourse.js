import { getCourseApi, updateCourseApi } from "api/course";
import Spinner from "components/common/spinner/Spinner";
import { FeedbackContext } from "context/FeedbackContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useRefetchEnums from "utils/hooks/useRefetchEnums";
import { url_courses } from "utils/pageUrls";
import AddEditLayout from "../common/AddEditLayout";
import CourseInput from "./CourseInput";

const EditCourse = () => {
    const context = useContext(FeedbackContext)
    const [loading, setLoading] = useState(true)
    const [state, setState] = useState({
        type: '',
        language: '',
        description: '',
        status: 'inactive'
    })
    const navigate = useNavigate()
    const params = useParams()
    const [getEnums] = useRefetchEnums()

    useEffect(() => {
        getEnums()
    }, [])

    useEffect(() => {
        (async () => {
            const res = await getCourseApi(params?.id)
            setLoading(false)
            if (!res.error) {
                setState({
                    ...res.data,
                })
            }
        })()
    }, [])


    const onSubmit = async (e) => {
        e.preventDefault()

        const res = await updateCourseApi(params?.id, state)
        context.setFeedback(res.message, res.error)
        if (!res.error)
            setTimeout(() => {
                navigate(url_courses)
            }, 500)

    }
    console.log(state)
    return <AddEditLayout title="Edit Center">
        {loading ? <Spinner /> :
            <CourseInput state={state} setState={setState} onSubmit={onSubmit} />
        }
    </AddEditLayout>
};

export default EditCourse;
