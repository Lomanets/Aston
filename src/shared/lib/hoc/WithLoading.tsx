import React from 'react';
import styles from './WithLoading.module.css'

export interface WithLoadingProps {
    isLoading: boolean;
    loadingText?: string; 
}

const withLoading = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    return (props: P & WithLoadingProps) => {
        const { isLoading, loadingText = 'Загрузка...', ...restProps } = props;

        if (isLoading) {
            return (
                <div className="loading-indicator">
                    {loadingText}
                </div>
            );
        }

        return <WrappedComponent {...restProps as P} />;
    };
};

export default withLoading;