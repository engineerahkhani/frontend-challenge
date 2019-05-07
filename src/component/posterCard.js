import React from 'react';
import car from '../images/car.jpg';
import EditIcon from '@material-ui/icons/Edit';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import DeleteIcon from '@material-ui/icons/Delete';

export const PosterCard = ({ id, title, price, time, status, ...props }) => {
    return (
        <div className="poster">
            <div className="poster__info">
                <div className="poster__img-block">
                    <img alt={title} className="poster__img" src={car} />
                    {status === 'pending' && (
                        <div className="poster__caption">در انتطار تایید</div>
                    )}
                </div>
                <div className="poster__detail-block">
                    <div className="poster__title">{title}</div>
                    <div className="poster__time">{time}</div>
                    <div className="poster__price">
                        {price}
                        <span className="poster__price-unit">تومان</span>
                    </div>
                </div>
            </div>
            <div className="poster__actions">
                <div className="poster__btn ">
                    <ShowChartIcon className="poster__btn-icon" />
                    <span className="poster__btn-text">افزایش‌بازدید</span>
                </div>
                <div className="poster__btn poster__btn--bordered">
                    <EditIcon className="poster__btn-icon" />
                    <span className="poster__btn-text">ویرایش</span>
                </div>
                <div
                    onClick={() => props.onDelete(id)}
                    className="poster__btn poster__btn--bordered"
                >
                    <DeleteIcon className="poster__btn-icon" />
                    <span className="poster__btn-text">حذف</span>
                </div>
            </div>
        </div>
    );
};
