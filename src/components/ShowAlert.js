import {useEffect} from 'react';

export default function ShowAlert(props) {
    useEffect(() => {
        const timeoutId = setTimeout(props.setShowAlert, 3000);
        return () => clearTimeout(timeoutId);
    }, [props.text]);

    return (
        <div className="show-alert">{props.text} sebete elave olundu</div>
    );
}