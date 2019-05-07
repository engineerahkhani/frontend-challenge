import React from 'react';

export const Tab = props => {
    return (
        <div className="tab">
            <div
                onClick={() => props.onClick('all')}
                className={`tab__item ${
                    props.activeTab === 'all' ? 'tab__item--active' : ''
                }`}
            >
                <span>همه</span>
            </div>
            <div
                onClick={() => props.onClick('active')}
                className={`tab__item ${
                    props.activeTab === 'active' ? 'tab__item--active' : ''
                }`}
            >
                <span>فعال</span>
            </div>
            <div
                onClick={() => props.onClick('inactive')}
                className={`tab__item ${
                    props.activeTab === 'inactive' ? 'tab__item--active' : ''
                }`}
            >
                <span>غیرفعال</span>
            </div>
        </div>
    );
};
