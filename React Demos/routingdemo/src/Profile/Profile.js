import React from 'react'
import { useParams } from 'react-router-dom'

export default function Profile() {
    let { id } = useParams();
    const [profile, setProfile] = React.useState({});
    React.useEffect(() => {
        fetch(`https://dummyapi.io/data/v1/user/${id}`, {
            headers: {
                'app-id': '61d42dff81395d74a1d00055'
            }
        }).then(res => res.json())
            .then(profileData => {
                setProfile(profileData)
            });
    }, [])

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <img src={profile.picture} width="100%" alt="" />
                </div>
                <div className="col-md-4">
                    <h2>{profile.firstName} {profile.lastName}</h2>
                    <p>{profile.email}</p>
                    <p>{profile.gender}</p>
                    <p>{profile.location?.country}</p>
                    <p>{profile.phone}</p>
                    <p>{profile.registerData}</p>
                </div>
            </div>
        </div>
    )
}