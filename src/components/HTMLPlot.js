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
    }

    // Calculate available width considering margins
    let availableWidth
    if (window.innerWidth >= 1280) {
      availableWidth = 762 + 48 * 2
    } else if (window.innerWidth >= 768) {
      availableWidth = 672 + 48 * 2
    } else {
      availableWidth = window.innerWidth - (window.innerWidth >= 640 ? 96 : 64)
    }

    // Calculate scale factor
    const scale = availableWidth / width_numeric
    
    // Calculate new height maintaining aspect ratio
    const scaledHeight = height_numeric * scale

    setLayout({
      width: `${availableWidth}px`,
      height: `${scaledHeight}px`,
      scale_change_str: `scale(${scale})`,
      shift: `${window.innerWidth >= 640 ? -48 : -32}px`,
    })
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
        marginRight: layout.shift,
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
          position: 'relative',
          top: '0',
          left: '0',
        }}
      ></iframe>
    </div>
  )
}

export default HTMLPlot