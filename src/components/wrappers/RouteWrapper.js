import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import objectIsEmpty from 'utils/objectIsEmpty';
import { url_hq, url_login } from 'utils/pageUrls';
import { isGuestRoute, isPublicRoute } from 'utils/paths';

const RouteWrapper = ({ children }) => {
  const { user } = useSelector(state => state.authReducer)
  const location = useLocation()
  const navigate = useNavigate()

  console.log(user, objectIsEmpty(user), location)

  const checkRoute = useMemo(() => {
    if (isGuestRoute(location)) {
      console.log('gurst', !objectIsEmpty(user))
      if (!objectIsEmpty(user)) {
        navigate(url_hq)
      } else {
        return children
      }
    } else if (isPublicRoute(location)) {
      console.log('public')
      return children
    } else {
      console.log('else')
      if (objectIsEmpty(user)) {
        navigate(url_login)
      } else
        return children
    }
  }, [location.pathname, user])



  return (
    <>
      {checkRoute}
    </>
  )
}

export default RouteWrapper
