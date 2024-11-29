'use client'
import React, { useState, useEffect } from 'react'

const HTMLPlot = ({
  title,
  pathname,
  height_before_scale = '433.59',
  width_before_scale = '768',
}) => {
  const height_numeric = +height_before_scale
  const width_numeric = +width_before_scale
  const [layout, setLayout] = useState({
    width: '762px',
    height: '571.5px',
    scale_change_str: 'scale(0.5291666666666667)',
    shift: '0px',
  })

  let origin = ''

  const handleResize = () => {
    if (typeof window !== 'undefined') {
      origin = window.location.origin
      console.log(origin.concat(pathname))
    }

    if (window.innerWidth >= 1280) {
      setLayout({
        ...layout,
        width: `${762 + 48 * 2}px`,
        height: `${(762 + 48 * 2) * (height_numeric / width_numeric)}px`,
        scale_change_str: `scale(${(762 + 48 * 2) / width_numeric})`,
        shift: `${-48}px`,
      })
    } else if (window.innerWidth >= 768) {
      setLayout({
        ...layout,
        width: `${672 + 48 * 2}px`,
        height: `${(672 + 48 * 2) * (height_numeric / width_numeric)}px`,
        scale_change_str: `scale(${(672 + 48 * 2) / width_numeric})`,
        shift: `${-48}px`,
      })
    } else {
      setLayout({
        ...layout,
        width: `${window.innerWidth}px`,
        height: `${window.innerWidth * (height_numeric / width_numeric)}px`,
        scale_change_str: `scale(${window.innerWidth / width_numeric})`,
        shift: `${window.innerWidth >= 640 ? -48 : -32}px`,
      })
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div
      style={{
        overflow: 'hidden',
        position: 'relative',
        width: layout.width,
        height: layout.height,
        marginLeft: layout.shift,
      }}
    >
      <iframe
        title={title}
        src={origin.concat(pathname)}
        style={{
          height: `${height_numeric}px`,
          width: `${width_numeric}px`,
          transform: layout.scale_change_str,
          transformOrigin: '0px 0px',
          border: '0',
        }}
      ></iframe>
    </div>
  )
}

export default HTMLPlot;