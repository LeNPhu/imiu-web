import React from 'react'
import "./styles.scss"
import { useLocation } from 'react-router';
import { useEffect } from 'react';

const Payment = () => {
    const location = useLocation();
    console.log("location", location);
    // useEffect(() => {
        
    // }, [])

  return (
    <div>Payment</div>
  )
}

export default Payment