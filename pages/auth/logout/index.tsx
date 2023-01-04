import { removeToken } from '../../../utils/helpers';
import { useEffect } from 'react';
import authRoute from '../../../hook/authRoute';

const Index: React.FC = () => {
    useEffect(() => {
        removeToken();
    },[removeToken]);

    return (
        <div></div>
    )
}

export default authRoute(Index);