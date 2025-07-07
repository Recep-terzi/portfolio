import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const token = localStorage.getItem('auth');
   
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [info, setInfo] = useState('');
    const [material, setMaterial] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        if(!token){
            navigate('/login')
        }
    },[token])
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('projectTitle', title);
        formData.append('projectInfo', info);
        formData.append('projectMaterial', material);
        if (image) formData.append('projectImage', image);
        if (token) {
            fetch('http://localhost:5000/api/projects', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            })
                .then(res => {
                    if (res.status === 403) {
                        localStorage.removeItem('token');
                        navigate('/login');
                    } else {
                        return res.json();
                    }
                })
                .then(data => {
                    console.log('Başarılı ekleme:', data);
                    setTitle('');
                    setInfo('');
                    setMaterial('');
                    setImage(null);
                })
                .catch(err => console.error(err));
        }

    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 bg-red-200 *:bg-white *:text-black absolute left-0 right-0 bottom-0 top-0 !m-auto p-10 w-[400px] h-[500px]"
        >
            <input
                type="text"
                onChange={e => setTitle(e.target.value)}
                value={title}
                placeholder="Project Title"
                required
            />
            <input
                type="text"
                onChange={e => setInfo(e.target.value)}
                value={info}
                placeholder="Project Info"
                required
            />
            <input
                type="file"
                onChange={e => setImage(e.target.files[0])}
            // value kontrolü dosyada yapılmaz
            />
            <input
                type="text"
                onChange={e => setMaterial(e.target.value)}
                value={material}
                placeholder="Project Material (comma separated)"
                required
            />
            <button type="submit">Ekle</button>
        </form>
    );
};

export default Admin;
