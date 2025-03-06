import Hall from "../entity/hall.entity";
import Movie from "../entity/movie.entity";
import Review from "../entity/review.entity";
import Role from "../entity/role.entity"
import Seat from "../entity/seat.entity";
import User from "../entity/user.entity"

export const defaultDbData = async () => {
    await Role.create({
        id: 1,
        name: 'Admin'
    });
    await Role.create({
        id: 2,
        name: 'Member'
    });

    const user1 = await User.create({
        id: 1,
        name: 'Stefan Jambrich',
        email: 'email@email.com',
        password: 'password',
        roleId: 1
    });
    const user2 = await User.create({
        id: 2,
        name: 'Tonda Novak',
        email: 'test@email.com',
        password: 'password',
        roleId: 2
    });

    const review1 = await Review.create({
        id: 1,
        rating: 5,
        comment: 'Skvělý film, doporučuji!!!!!!!!!',
        user: user1,
        userId: 1,
        movieId: 1
    })

    const movie1 = await Movie.create({
        id: 1,
        title: 'Vlny',
        description: 'Vlny je český film z roku 2020 režiséra Tomáše Bojara. Film byl natočen podle scénáře Tomáše Bojara a Petra Pýchy. Hlavní role ve filmu ztvárnili Jiří Mádl, Kristýna Nováková, Eliska Krenková, Martin Finger, Vojtěch Dyk a další.',
        duration: 100,
        releaseDate: new Date('2024-01-01'),
        cover: 'https://image.pmgstatic.com/cache/resized/w280/files/images/film/posters/169/002/169002978_123omn.jpg',
        trailer: 'https://video.pmgstatic.com/files/videos/157/854/157854868/169003236_4oaass.mp4',
        reviews: [
            review1
        ]
    });
    const movie2 = await Movie.create({
        id: 2,
        title: 'Gladiator 2',
        description: 'Gladiátor 2 je americký film z roku 2024 režiséra Ridleyho Scotta. Film byl natočen podle scénáře Petera Craiga. Hlavní role ve filmu ztvárnili Russell Crowe, Joaquin Phoenix, Connie Nielsen, Oliver Reed, Richard Harris a další.',
        duration: 120,
        releaseDate: new Date('2024-05-01'),
        cover: 'https://www.cinemacity.cz/xmedia-cw/repo/feats/posters/6673S2R.jpg',
        trailer: 'https://www.youtube.com/watch?v=NmTXjT4TOWA'
    });

    const createSeats = async () => {
        const seats: Seat[] = [];
        for (let i = 1; i < 50; i++) {
            const seat = await Seat.create({
                id: i,
                column: i % 10,
                row: Math.floor(i / 10),
            })
            seats.push(seat);
        }
        return seats;
    }

    const hall1 = await Hall.create({
        id: 1,
        name: 'Sál 1',
        seats: await createSeats()
    })
}