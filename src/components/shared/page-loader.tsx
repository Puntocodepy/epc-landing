'use client';
import {useEffect} from 'react';
import {ThreeDots} from 'react-loader-spinner';
import Image from 'next/image';

type LoaderProps = {
  setIsLoading: (isLoading: boolean) => void;
};


const Loader = ({ setIsLoading }: LoaderProps) => {
  useEffect(() => {
    const onLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', onLoad);
    }

    return () => window.removeEventListener('load', onLoad);
  }, [setIsLoading]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >

      <Image src="/images/epc-logo.svg" alt="epc logo" width={200} height={20} />

      <ThreeDots
        visible={true}
        height="60"
        width="60"
        color="#fff"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;