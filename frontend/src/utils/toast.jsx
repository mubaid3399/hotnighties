/* eslint-disable react-refresh/only-export-components */
import { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { gsap } from 'gsap';

export const GsapToast = ({ message, type = 'success', closeToast }) => {
  const elRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      elRef.current,
      { y: 50, scale: 0.8, opacity: 0 },
      { y: 0, scale: 1, opacity: 1, duration: 0.45, ease: 'back.out(1.5)' }
    );
  }, []);

  const isSuccess = type === 'add' || type === 'success';
  const isRemove = type === 'remove';
  const isError = type === 'error';
  const isInfo = type === 'info';

  const getTitle = () => {
    if (isSuccess) return 'SUCCESS!';
    if (isRemove) return 'REMOVED!';
    if (isError) return 'ALERT!';
    return 'NOTICE!';
  };

  const getColorClass = () => {
    if (isSuccess) return 'text-[#00d26a]';
    if (isRemove || isError) return 'text-red-500';
    return 'text-[#501524]';
  };

  return (
    <div
      ref={elRef}
      className="flex items-start gap-3 px-3.5 py-3 rounded shadow-[0_6px_25px_rgba(0,0,0,0.12)] bg-white w-[290px] relative mx-auto my-2 border border-gray-200 z-[9999]"
    >
      {/* Icon */}
      <div className="flex-shrink-0 mt-0.5">
        {isSuccess && (
          <svg className="w-6 h-6 text-[#00d26a]" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="12" />
            <path fill="#ffffff" d="M10.495 16.5l-4.5-4.5 1.41-1.41 3.09 3.09 7.09-7.09 1.41 1.41-8.5 8.5z" />
          </svg>
        )}
        {(isRemove || isError) && (
          <svg className="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="12" />
            <path fill="#ffffff" d="M16.243 7.757a1 1 0 00-1.414 0L12 10.586 9.172 7.757a1 1 0 00-1.414 1.414L10.586 12l-2.828 2.828a1 1 0 101.414 1.414L12 13.414l2.828 2.828a1 1 0 001.414-1.414L13.414 12l2.828-2.828a1 1 0 000-1.414z" />
          </svg>
        )}
        {isInfo && (
          <svg className="w-6 h-6 text-[#501524]" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="12" />
            <path fill="#ffffff" d="M11 17h2v-6h-2v6zm0-8h2V7h-2v2z" />
          </svg>
        )}
      </div>

      {/* Text Content */}
      <div className="flex-1 min-w-0 pr-2">
        <p className={`text-[13px] font-semibold tracking-wide ${getColorClass()}`}>
          {getTitle()}
        </p>
        <p className="text-gray-600 text-[12px] mt-[1px] leading-snug">
          {message}
        </p>
      </div>

      {/* Close Button */}
      <button
        onClick={closeToast}
        className="flex-shrink-0 text-gray-300 hover:text-gray-500 transition-colors cursor-pointer"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export const notify = (message, type = 'success') => {
  toast(<GsapToast message={message} type={type} />);
};

export default notify;
