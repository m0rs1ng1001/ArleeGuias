import React from "react";

export function MyButton() {
    return (
        <button>
            I'm a button
        </button>
    );
}

export function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <p>hello there. <br />How do you do?</p>
        </>
    );
}

const user = {
    name: 'Juan Diaz',
    imagenUrl: 'https://i.pinimg.com/564x/33/c2/bb/33c2bb1cbc72c3322800af181cf66b4f.jpg',
    imageSize: 600,
    imageSize2: 300
};

export function Profile() {
    return (
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imagenUrl}
                alt={'Photo of ' + users.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize2
                }}
            />
        </>
    );
}




function AdminPage() {
    return (
        <>
            <h1>
                AdminPage
            </h1>
        </>
    )
}

function LoginForm() {
    return (
        <>
            <h1>
                LoginForm
            </h1>
        </>
    )
}


export function Resultado() {

    let valor = true;
    return (
        (valor) ? (<AdminPage />) : (<LoginForm />)
    )

}



const products = [
    {title : 'Cabbage', isfruit : false, id : 1},
    {title : 'Garlic', isfruit : false, id : 2},
    {title : 'Apple', isfruit : true, id : 3},
];


export function ShoppingList() {
    const listItems = products.map(product =>
        <li
            key={product.id}
            style= {{
                color: product.isfruit ? 'magenta' : 'darkgreen'
            }}
>
            {product.title}
        </li>
        );
        return(
            <ul>{listItems}</ul>
        );
}



const videogames = [
    {title : 'Valorant', isgame : false, id : 1},
    {title : 'GodOfWar', isgame : false, id : 2},
    {title : 'DeathStranding', isgame : true, id : 3},
];


export function ShoppingGames() {
    const listgames = videogames.map(games =>
        <li
            key={games.id}
            style= {{
                color: games.isfruit ? 'magenta' : 'darkgreen'
            }}
>
            {games.title}
        </li>
        );
        return(
            <ul>{listgames}</ul>
        );
}





function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const users = {
    firstName: 'santi', 
    lastName: 'valencia'
};












export const ProjectsPage2 = () => {
    if (users) {
        return <h1>hello,{formatName(users)}!</h1>;
    }
    return <h1>hello, Stranger</h1>
};



