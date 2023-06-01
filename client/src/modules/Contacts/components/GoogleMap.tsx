import React, { FC } from 'react';
import { IGoogleMap } from '../interfaces/IGoogleMap';

const GoogleMap: FC<IGoogleMap> = ({ styles }) => {
    return (
        <div className={styles.googleMap}>
            <iframe
                title="Map"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d829.9836026828852!2d24.48854799764635!3d58.38618542281844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2see!4v1596381126219!5m2!1sen!2see"
            ></iframe>
        </div>
    );
};

export default GoogleMap;
