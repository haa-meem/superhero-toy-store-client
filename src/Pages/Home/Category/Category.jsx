import { useEffect, useState } from "react";

const Category = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    return (
        <div className="w-full">
            <h1 className='text-center font-bold text-5xl mb-4'>Category</h1>
            <div className="tabs tabs-boxed flex justify-center">
                <a
                    className={`tab ${activeTab === 1 ? 'tab-active' : ''}`}
                    onClick={() => handleTabClick(1)}
                >
                    Action Figures
                </a>
                <a
                    className={`tab ${activeTab === 2 ? 'tab-active' : ''}`}
                    onClick={() => handleTabClick(2)}
                >
                    Vehicles & Playsets
                </a>
                <a
                    className={`tab ${activeTab === 3 ? 'tab-active' : ''}`}
                    onClick={() => handleTabClick(3)}
                >
                    Role-Play & Costumes
                </a>
            </div>
            <div className="tab-content mt-4">
                {activeTab === 1 &&
                    <div>
                        {
                            category.map(info =>
                                <div key={info.id}>
                                    <p>{info.toys[0].name}</p>
                                </div>
                            )
                        }
                    </div>
                }
                {activeTab === 2 && <div>Content of Tab 2</div>}
                {activeTab === 3 && <div>Content of Tab 3</div>}
            </div>
        </div>
    );
};

export default Category;