import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import objectIsEmpty from 'utils/objectIsEmpty';
import { url_hq, url_login } from 'utils/pageUrls';
import { isGuestRoute, isPublicRoute } from 'utils/paths';

const RouteWrapper = ({ children }) => {
  const { user } = useSelector(state => state.authReducer)
  const location = useLocation()

  const checkRoute = useMemo(() => {
    if (isGuestRoute(location)) {
      if (!objectIsEmpty(user)) {
        window.location.replace(url_hq)
      } else {
        return children
      }
    } else if (isPublicRoute(location)) {
      return children
    } else {
      if (objectIsEmpty(user)) {
        window.location.replace(url_login)
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
