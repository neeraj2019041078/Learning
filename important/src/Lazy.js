import React, { Suspense, lazy } from 'react'

const Lazy = () => {
    const Comp1=lazy(()=> import("./Components/Comp1"))
    const Comp2=lazy(()=> import("./Components/Comp2"))
  return (
    <>
        <Suspense fallback={<div>Loading .....................</div>}>
        <Comp1 />

        </Suspense>
        <Suspense fallback={<div>Loading 222222222222222222222 .....................</div>}>
        <Comp2 />

        </Suspense>
    </>
  )
}

export default Lazy;