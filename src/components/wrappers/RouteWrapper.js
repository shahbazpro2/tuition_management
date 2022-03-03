import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux';
import objectIsEmpty from 'utils/objectIsEmpty';
import { url_hq, url_login } from 'utils/pageUrls';
import { isGuestRoute } from 'utils/paths';

const RouteWrapper = ({ children }) => {
  const { user } = useSelector(state => state.authReducer)
  const router = useRouter();

  const checkRoute = () => {
    if (isGuestRoute(router)) {
      if (!objectIsEmpty(user)) {
        router.push(url_hq)
      } else {
        return children
      }
    } else if (isGuestRoute(router) && objectIsEmpty(user)) {
      router.push(url_login)
    } else {
      return children
    }
  }



  return (
    <>
      {checkRoute()}
    </>
  )
}

export default RouteWrapper
