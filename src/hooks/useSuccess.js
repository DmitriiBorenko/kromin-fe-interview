import React, { useCallback } from 'react'
import useAlert from './useAlert'

/**
 * Usage:
 *
 * const showSuccess = useSuccess()
 * showSuccess('OK')
 *
 * */

const useSuccess = () => {
    const { triggerAlert } = useAlert()

    return useCallback(message => {
        triggerAlert({ severity: 'success', title: message })
    }, [])
}

export default useSuccess
