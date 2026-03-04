import React from 'react'
import { Card, Button } from 'antd'
import { HiOutlineArrowUpRight } from 'react-icons/hi2'

/**
 * @param {string} title  Card header label
 * @param {string|number} value  Main number (can include commas/decimals)
 * @param {string} percentChange e.g. "+12.5%" (optional)
 * @param {string|number} vsLastMonth  Comparison value (optional)
 *
 * If no props are passed, the component will render with
 * sensible demo defaults so the layout looks realistic.
 */
const StateCards = ({
  title = 'Total Orders',
  value = '1,248',
  percentChange = '+12.5%',
  vsLastMonth = '1,109',
}) => {
  // split value into integer and fractional parts for styling
  const [intPart, fracPart] = String(value).split('.')

  // sizing constants tuned for a more compact, responsive look
  const CARD_WIDTH = 280
  const CARD_PADDING = 14
  const CORNER_BASE = 52            // main corner square
  const CORNER_SMALL_W = 26         // second light shape
  const CORNER_SMALL_H = 24

  const OVERLAY_W = 38              // colored overlay below second shape
  const OVERLAY_H = 26

  return (
    <Card
      className="text-white position-relative"
      style={{
        width: '100%',
        maxWidth: `${CARD_WIDTH}px`,
        borderRadius: '24px',
        background: '#1d4ed8',
        padding: `${CARD_PADDING}px`,
      }}
    >
      {/* 1. The Custom Inverted Corner Shape */}
      <div
        className="position-absolute bg-gray"
        style={{
          top: 0,
          right: -1,
          width: `${CORNER_BASE}px`,
          height: `${CORNER_BASE}px`,
          // We use a polygon to "cut" the corner, then mask it for the curve
          clipPath: "polygon(100% 0, 100% 100%, 0 100%, 0 0, 25% 0%, 25% 0)",
          borderBottomLeftRadius: '24px', // This creates the "inner" scoop
        }}
      >
        {/* 2. The AntD Icon Button */}
        <div className="d-flex align-items-center justify-content-center h-100 w-100 ps-2 pb-2">
          <Button
            type="text"
            shape="circle"
            className="d-flex align-items-center justify-content-center shadow-sm stateButton"
            style={{ width: '40px', height: '40px' }}
            icon={<HiOutlineArrowUpRight style={{ fontSize: '18px' }} rotate={45} />}
          />
        </div>
      </div>

      <div
        className="position-absolute bg-gray"
        style={{
          top: `${CORNER_BASE - 1}px`,
          right: -1,
          width: `${CORNER_SMALL_W}px`,
          height: `${CORNER_SMALL_H}px`,
          // We use a polygon to "cut" the corner, then mask it for the curve
          clipPath: "polygon(100% 0, 100% 100%, 0 100%, 0 0, 25% 0%, 25% 0)",
          borderRadius: '24px 0px 24px 24px', // This creates the "inner" scoop
        }}
      ></div>
      <div
        className="position-absolute"
        style={{
          top: `${CORNER_BASE}px`,
          right: 0,
          width: `${OVERLAY_W}px`,
          height: `${OVERLAY_H+2}px`,
          // We use a polygon to "cut" the corner, then mask it for the curve
          clipPath: "polygon(100% 0, 100% 100%, 0 100%, 0 0, 25% 0%, 25% 0)",
          borderRadius: '24px', // This creates the "inner" scoop
          background: '#1d4ed8', // A subtle overlay to enhance the 3D effect
        }}
      ></div>

      <div
        className="position-absolute bg-gray"
        style={{
          top: 0,
          right: `${CORNER_BASE -2}px`,
          width: `${CORNER_SMALL_W}px`,
          height: `${CORNER_SMALL_H}px`,
          // We use a polygon to "cut" the corner, then mask it for the curve
          clipPath: "polygon(100% 0, 100% 100%, 0 100%, 0 0, 25% 0%, 25% 0)",
          borderRadius: '24px 0px 24px 24px', // This creates the "inner" scoop
        }}
      ></div>
      <div
        className="position-absolute"
        style={{
          top: 0,
          right: `${CORNER_BASE -1}px`,
          width: `${OVERLAY_W}px`,
          height: `${OVERLAY_H+3}px`,
          // We use a polygon to "cut" the corner, then mask it for the curve
          clipPath: "polygon(100% 0, 100% 100%, 0 100%, 0 0, 25% 0%, 25% 0)",
          borderRadius: '24px', // This creates the "inner" scoop
          background: '#1d4ed8', // A subtle overlay to enhance the 3D effect
        }}
      ></div>

      {/* 3. Card Content using Bootstrap Utilities */}
      <div className="mt-1">
        <p
          className="opacity-75 mb-1"
          style={{ fontSize: '13px', fontWeight: 500 }}
        >
          {title}
        </p>

        <div className="d-flex align-items-baseline gap-1 mb-2">
          <span
            className="fw-bold mb-0"
            style={{
              fontSize: 'clamp(22px, 4vw, 30px)',
              lineHeight: 1,
            }}
          >
            {intPart}
          </span>
          {fracPart && (
            <span
              className="fw-semibold opacity-75 mb-0"
              style={{
                fontSize: 'clamp(16px, 3vw, 20px)',
              }}
            >
              .{fracPart}
            </span>
          )}
          {percentChange && (
            <span
              className="badge rounded-pill bg-white bg-opacity-25 ms-2"
              style={{ fontSize: '11px', padding: '4px 10px' }}
            >
              {percentChange}
            </span>
          )}
        </div>

        {vsLastMonth && (
          <div className="opacity-50 mt-2" style={{ fontSize: '12px' }}>
            Compared to last month:{' '}
            <span className="fw-bold text-white">{vsLastMonth}</span>
          </div>
        )}
      </div>
    </Card>
  )
}

export default StateCards

