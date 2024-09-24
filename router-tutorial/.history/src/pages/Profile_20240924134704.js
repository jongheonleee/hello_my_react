import { useParams } from 'react-router-dom';

const data = {
    velopert : {
        name : 'John',
        description : 'blahblah',
    }, 
    gildong : {
        name : 'Gildong',
        description : 'blahblahblah',
    }
};

const Profile = () => {
    const params = useParams();
    const profile = data[params.username];

    return (
        <div>
            <h1>user profile</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ) : (
                <p>Not found</p>
            )}
        </div>
    );
};

export default Profile;