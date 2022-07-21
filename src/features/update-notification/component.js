import React, {Fragment, useEffect, useState} from 'react'
import './notification.css'

const CURRENT_VERSION = process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_VERSION.trim()
    : 'value'

export const UpdateNotifications = () => {
    const [remoteVersion, setRemoteVersion] = useState(CURRENT_VERSION)
    const [noticationDismissed, setNotificationDismissed] = useState(false)

    useEffect(() => {
        const intervalId = setInterval(async () => {
            const response = await fetch('/version.txt', {
                method: 'GET'
            })
            const version =  await response.text()
            setRemoteVersion(version.trim())
        }, 30000)
        return () => clearInterval(intervalId)
    }, [])

    return <Fragment>
        {
            remoteVersion !== CURRENT_VERSION && !noticationDismissed &&
            <div className='notification'>
                <div className='message'>
                    <p>A new version of the Jane is available</p>
                    <p className='subtext'>(current: {CURRENT_VERSION}, newer: {remoteVersion})</p>
                </div>
                <button className='btn' onClick={() => window.location.reload()}>Refresh</button>
                <button className='btn' onClick={() => setNotificationDismissed(true)}>Dismiss</button>
            </div>
        }
    </Fragment>
}
