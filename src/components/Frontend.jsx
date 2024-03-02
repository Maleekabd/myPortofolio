import BackButton from "../elements/BackButton"

const FrontendProjects = [
    {
        id: 1,
        title: "ShopBayy : E-Commerce",
        image: ""
    },
    {
        id: 2,
        title: "MusicSpot : Explore your favorite music",
        image: ""
    },
    {
        id: 3,
        title: "Login Page",
        image: ""
    },
    {
        id: 4,
        title: "Markdown Previewer",
        image: ""
    },
    {
        id: 5,
        title: "Quote Generator",
        image: ""
    },
    {
        id: 6,
        title: "Web Laboratory Multimedia Communication B-304"
    },
    {
        id: 7,
        title: "Vegetable Box : Get Fresh Vegetable from local farmer",
        image: ""
    }, {
        id: 8,
        title: "Web Portofolio"
    }
]

const Frontend = () => {
    return (
        <section>
            <BackButton />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 m-2 p-2 dark:bg-gray-900 dark:text-gray-100">
                {FrontendProjects.map(skill => (
                    <div key={skill.id} className="border rounded-md relative h-96">
                        <img src="https://source.unsplash.com/random/300x300/?2" alt={skill.title} className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-3 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-md font-semibold tracking-wide">{skill.title}</h2>
                                {/* <p className="dark:text-gray-100">{skill.}</p> */}
                            </div>
                            <button type="button" className="absolute bottom-0 left-0 border-t flex items-center justify-center w-full p-3 font-semibold dark:bg-violet-400 dark:text-gray-900 text-sm">Read more</button>
                        </div>
                    </div>
                ))
                }
            </div>
        </section >
    )
}

export default Frontend