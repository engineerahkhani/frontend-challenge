import React from 'react';
import { PosterCard } from './posterCard';

export const PosterList = props => {
    return (
        <div className="poster-list">
            {props.posters.map((item, index) => (
                <PosterCard
                    key={`${item.id}__${index}`}
                    {...item}
                    onDelete={props.onClickDelete}
                />
            ))}
        </div>
    );
};
