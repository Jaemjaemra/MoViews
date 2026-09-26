import React, { useState } from "react";

// 1. Data Filem (Ditambah atribut 'country')
const DataFilm = [
  {
    id: 1,
    title: "5 Bomoh",
    direction: "Syed Fariz",
    year: "2026",
    Genre: "Comedy",
    country: "Malaysia",
    starring: ["Aaron Aziz", "Fadlin Shauki", "Scha Alyahya"],
    rating: 4,
    review:
      "“Funny, chaotic, and full of supernatural moments! A fun watch if you enjoy Malaysian comedy with a spooky twist. 👻😂”",
    ticketColor: "#2D0000",
    poster:
      "https://d9s3e2ooa0od7.cloudfront.net/assets/5-bomoh/ce0400dc-0201-47f2-971a-db72d02d5f6a/ce0400dc-0201-47f2-971a-db72d02d5f6a.jpg",
  },
  {
    id: 2,
    title: "Polong",
    direction: "Zulkarnain Azhar",
    year: "2026",
    Genre: "Horror, Mystery",
    country: "Malaysia",
    starring: ["Mimi Lana", "June Lojong"],
    rating: 4,
    review:
      "“Creepy, mysterious, and full of supernatural suspense! The eerie atmosphere kept me curious until the end. 👻”",
    ticketColor: "#2D0000",
    poster:
      "https://d9s3e2ooa0od7.cloudfront.net/assets/polong-2026/f0fa7abe-82ae-4304-968a-900d4cf95b3f/f0fa7abe-82ae-4304-968a-900d4cf95b3f.jpg?v=d9ed5a30-dd94-456f-b7cd-80817b9cb8cf?t=1779330135020",
  },
  {
    id: 3,
    title: "La Luna",
    direction: "M. Raihan Halim",
    year: "2023",
    Genre: "Comedy, Romance, Family",
    country: "Malaysia",
    starring: ["Shaheizy Sam", "Sharifah Amani"],
    rating: 5,
    review:
      "“A fun mix of romance, action, and comedy! The storyline kept me entertained, with plenty of chaotic moments along the way. 🌙✨”",
    ticketColor: "#2D0000",
    poster:
      "https://media.ohbulan.com/2023/10/LA-LUNA-Official-Poster-BM-630x925.jpg",
  },
  {
    id: 4,
    title: "Khadam",
    direction: "Shamyl Othman",
    year: "2026",
    Genre: "Supernatural Horror",
    country: "Malaysia",
    starring: ["Aghniny Haque", "Remy Ishak", "Siti Khadijah"],
    rating: 5,
    review:
      "“Creepy, dark, and full of suspense! The supernatural elements made it such an intense watch. 👻🖤”",
    ticketColor: "#2D0000",
    poster:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibx0scCYNIb7j8BoLHwqP-S6L8H77nsOU9_1sqXszrY5WyVp1VRjek8wTXM9XSevKcOhulg7k0jm3ial4tBwKuKBoDvI3yikuYVUHngJ0_WcXTeDJiAGNfrsKZD15EJl46vB1PXphosHvQyAeujCj4819HexYoHxR3C_gHVuyXZujIOF_Zx4lrbaLh9rt6/s1350/Khadam%2045%20Poster.jpeg",
  },
  {
    id: 5,
    title: "KKN di Desa Penari",
    direction: "Awi Suryadi",
    year: "2022",
    Genre: "Supernatural Horror",
    country: "Indonesia",
    starring: ["Aghniny Haque", "Adinda Thomas", "Tissa Biani"],
    rating: 5,
    review:
      "“Creepy, unsettling, and full of mystery! The atmosphere alone makes this one a scary watch. 🌑👻”",
    ticketColor: "#2D0000",
    poster:
      "https://i.pinimg.com/originals/ee/43/25/ee43251a054ce76a6ac62c02b5f26b71.jpg",
  },
  {
    id: 6,
    title: "Kang Mak X Nenek Gayung",
    direction: "Herwin Novianto",
    year: "2025",
    Genre: "Comedy, Horror",
    country: "Indonesia",
    starring: ["Rigen Rakelna", "Indra Jegel", "Banjong Pisanthanakun"],
    rating: 5,
    review:
      "“Creepy, unsettling, and full of mystery! The atmosphere alone makes this one a scary watch. 🌑👻”",
    ticketColor: "#2D0000",
    poster:
      "https://awsimages.detik.net.id/community/media/visual/2025/09/29/postter-film-kang-solah-instagramcomfalconpictures-1759112425283.jpeg?w=700&q=90",
  },
  {
    id: 7,
    title: "Ipar adalah Maut",
    direction: "Manoj Punjabi",
    year: "2024",
    Genre: "Drama, Betrayal",
    country: "Indonesia",
    starring: ["Michelle Ziudith", "Deva Mahenra", "Davina Karamoy"],
    rating: 5,
    review:
      "“Messy, emotional, and full of drama! The complicated relationships and unexpected twists kept me hooked. 😭🔥”",
    ticketColor: "#2D0000",
    poster:
      "https://image.tmdb.org/t/p/original/xY8JpJx4LXLBLfKP0L1yReL15li.jpg",
  },
  {
    id: 8,
    title: "Colony",
    direction: "Yeon SangHo",
    year: "2026",
    Genre: "Horror, Zombie",
    country: "Korea",
    starring: ["Jun JiHyun", "Koo Kyohwan", "Ji ChangWook"],
    rating: 5,
    review:
      "“Mysterious, intense, and full of twists! The storyline kept me curious and wanting to know what happens next. 👀”",
    ticketColor: "#2D0000",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/2/2d/Colony_%282026_film%29_poster.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
  },
  {
    id: 9,
    title: "20 Century Girl's",
    direction: "Bang Woo-ri",
    year: "2022",
    Genre: "",
    country: "Korea",
    starring: ["Kim Yoojung", "Byeon WooSeok", "Roh YoonSeo"],
    rating: 5,
    review:
      "“Such a nostalgic and emotional romance! The friendship, first love, and bittersweet moments made this one unforgettable. 🥹💗”",
    ticketColor: "#2D0000",
    poster:
      "https://image.tmdb.org/t/p/original/re42isAXjME92ngP0G9kdRvRyuY.jpg",
  },
  {
    id: 10,
    title: "Tarung Unforgiven",
    direction: "Razaisyam Rashid",
    year: "2026",
    Genre: "Action, Crime, Drama",
    country: "Malaysia",
    starring: ["Mierul Aiman", "Aedy Ashraf", "Zul Arifin"],
    rating: 5,
    review: "“This action movies was so nice”",
    ticketColor: "#2D0000",
    poster:
      "https://tse1.mm.bing.net/th/id/OIP.M-mPksRt0PlD24gR9uZ2AQAAAA?r=0&pid=Api&h=220&P=0",
  },
  {
    id: 11,
    title: "Attack 13",
    direction: "Taweewat Wantha",
    year: "2025",
    Genre: "Horror, Teen",
    country: "Thailand",
    starring: ["Kottanid Laosubinprasoet", "Veerinsara Tangkitsuvanich"],
    rating: 4,
    review:
      "“This movie was so good and the hantu was so scary plus the end was mindblowing”",
    ticketColor: "#2D0000",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYzlkMWQzNWUtN2U4NS00MjZiLTkzNzMtMTAwNzNmNzYyOTdmXkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 12,
    title: "Pitch Perfect 1",
    direction: "Jason Moore",
    year: "2011",
    Genre: "Teen Comedy, Musical. Romance",
    country: "USA",
    starring: ["Anna Kendrick", "Anna Camp", "Brittany Snow"],
    rating: 5,
    review:
      "“All Pitch Perfect sequel must watch it, from the song and story korang akan best layan”",
    ticketColor: "#2D0000",
    poster:
      "https://i.pinimg.com/originals/2b/e7/f3/2be7f3ba79b8d62b2678b81cefa33f5a.jpg",
  },
  {
    id: 13,
    title: "The Lost Lotteries",
    direction: "Prueksa Amaruji",
    year: "2022",
    Genre: "Comedy, Crime",
    country: "Thailand",
    starring: ["Sky Wongravee", "Phantira Pipityakorn"],
    rating: 4.5,
    review: "“This movie was soo kelakar HAHAHHA”",
    ticketColor: "#2D0000",
    poster:
      "https://freakingeek.com/wp-content/uploads/2022/11/TheLostLotteries-Banniere.jpg",
  },
  {
    id: 12,
    title: "Work It ",
    direction: "Laura Terruso",
    year: "2020",
    Genre: "Musical, Romance",
    country: "USA",
    starring: ["Sabrina Carpeter", "Keiynan Lonsdale", "Liza Koshy"],
    rating: 4.1,
    review: "“Its like related to me btw and the story is amaze me”",
    ticketColor: "#2D0000",
    poster:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/work-it-poster.jpg",
  },
  {
    id: 13,
    title: " Para Betina Pengikut Iblis 2 ",
    direction: "Rako Prijanto",
    year: "2024",
    Genre: "Horror, Thriller",
    country: "Indonesia",
    starring: ["Adipati Dolken", "Sara Fajira", "Mawar Eva de Jongh"],
    rating: 4.1,
    review: "“”",
    ticketColor: "#2D0000",
    poster:
      "https://www.darksidereviews.com/wp-content/uploads/2024/12/Para-Betina-Pengikut-Iblis-2-1229x1536.jpg",
  },
  {
    id: 14,
    title: " Spiderman: The Brand New Day ",
    direction: "Destin Daniel Cretton",
    year: "2026",
    Genre: "Marvel, Action, Adventure, Sci-fi",
    country: "USA",
    starring: ["Zendaya", "Tom Holand"],
    rating: 4.1,
    review: "“This movie the cinematic was BOOM!”",
    ticketColor: "#2D0000",
    poster:
      "https://tse1.mm.bing.net/th/id/OIP.SIHkwqzms2ZsCu8CQnPxbwHaLH?r=0&pid=Api&h=220&P=0",
  },
  {
    id: 14,
    title: " The Red Envelope",
    direction: "Chayanop Boonprakob ",
    year: "2025",
    Genre: "Supernatural Fantasy, Comedy, Action",
    country: "Thailand",
    starring: ["Putthipong Assaratanakul", "Krit Amnuaydechkorn"],
    rating: 4.9,
    review: "“Funny ”",
    ticketColor: "#2D0000",
    poster:
      "https://image.tmdb.org/t/p/original/6Oul0Nw9IONNBx9i7mYekP4HXh0.jpg",
  },
];

const DataTV = [
  {
    id: 1,
    title: "Kudeta",
    direction: "Imran Sheik",
    year: "2022",
    Genre: "Crime, Politic",
    country: "Malaysia",
    episode: "8",
    starring: ["Vanida Imran", "Aedy Ashraf", "Adlin Aman Ramlie"],
    rating: 4,
    review:
      "“I honestly enjoyed this series! The political drama, action, and suspense kept me interested.”",
    ticketColor: "#2D0000",
    poster:
      "https://artworks.thetvdb.com/banners/v4/series/427745/posters/638dfead38c67.jpg",
  },
  {
    id: 2,
    title: "Project High Council",
    direction: "Anwari Ashraf",
    year: "2023",
    Genre: "Romance, Teen",
    country: "Malaysia",
    Episode: "10",
    starring: ["Mierul Aiman", "Nadhir Nasar", "Amir Ahnaf"],
    rating: 5,
    review:
      "“Intense, chaotic, and full of drama! The friendships, conflicts, and action kept me hooked. 🔥”",
    ticketColor: "#2D0000",
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2NlZGJkM2YtMWMzNy00ZjM0LTk4YjctMjQ5OWUwZmU3YjQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 3,
    title: "Bet",
    direction: "Simon Barry",
    year: "2026",
    Genre: "Thriller, Teen",
    country: "USA",
    Episode: "10",
    starring: ["Miku Martineau", "Ayo Solanke", "Eve Edwards"],
    rating: 5,
    review:
      "“Full of drama, secrets, and unexpected twists! Definitely an entertaining watch. 👀”",
    ticketColor: "#2D0000",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZWFkNjVkMTAtNjAwZS00YmZmLWEzY2ItMjc0MGEwNmFhMzk3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 4,
    title: "Hidden Love",
    director: "Lee Ching Jung",
    direction: "Lee Ching Jung",
    year: "2023",
    Genre: "Romance, Comedy",
    country: "China",
    Episode: "25",
    starring: ["Zhou Lusi", "Chen Zheyuan"],
    rating: 5,
    review:
      "“Such a sweet and comforting romance! The chemistry is adorable. 🥹💗”",
    ticketColor: "#2D0000",
    poster:
      "https://image.tmdb.org/t/p/original/8LqPbN3Vm8Xiaum4BwnbB0cHVZZ.jpg",
  },
  {
    id: 5,
    title: "The Vampire diaries",
    direction: "Kevin Williamson",
    year: "2009",
    Genre: "Drama, Supernatural",
    country: "USA",
    episode: "171",
    starring: ["Paul Wesley", "Nina Dobrev", "Ian Somerhalder"],
    rating: 5,
    review:
      "“Such a binge-worthy series! The romance, drama, and plot twists kept me hooked. 🧛🏻‍♀️🖤”",
    ticketColor: "#2D0000",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMmNjOWQzYmYtNGYxOS00MjVkLTg1MWUtMTkzMGE0MDgwNzQ5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 6,
    title: "I Love A lot of You",
    direction: "Kamthorn Lorjitramnuay",
    year: "2025",
    Genre: "Comedy, Romance",
    country: "Thailand",
    episode: "12",
    starring: ["Nanon Korapat", "Atitaya Tribudarak"],
    rating: 5,
    review:
      "“Such a cute and unique rom-com! The chemistry and humour made it so fun to watch. 💗”",
    ticketColor: "#2D0000",
    poster:
      "https://image.idntimes.com/post/20250503/gqbi796a4aapdfx-762f600b7430fe7f1730bf9086e37c67-3646b6ce7ed5183235e1eae522eea48d.jpg",
  },
];

// 2. Komponen Dropdown Buatan Sendiri (Cute Dropdown)
const CuteDropdown = ({ options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        fontSize: "11px",
        letterSpacing: "1px",
        zIndex: 50,
      }}
    >
      {/* Tombol Utama */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: "6px 14px",
          border: "1px solid #757D6F",
          borderRadius: "20px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "#2D0000",
          transition: "all 0.3s ease",
          backgroundColor: isOpen ? "rgba(109, 8, 8, 0.05)" : "transparent",
        }}
      >
        <span>
          {selected === "All" ? "ALL COUNTRIES" : selected.toUpperCase()}
        </span>
        <span
          style={{
            fontSize: "8px",
            transform: isOpen ? "rotate(180deg)" : "rotate(0)",
            transition: "transform 0.3s ease",
          }}
        >
          ▼
        </span>
      </div>

      {/* Menu Pilihan */}
      <div
        style={{
          position: "absolute",
          top: "120%",
          right: 0,
          width: "140px",
          backgroundColor: "#EEEAD7",
          border: "1px solid #757D6F",
          borderRadius: "12px",
          overflow: "hidden",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transform: isOpen ? "translateY(0)" : "translateY(-10px)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: "0 10px 25px rgba(45,0,0,0.1)",
        }}
      >
        {options.map((opt) => (
          <div
            key={opt}
            onClick={() => {
              onSelect(opt);
              setIsOpen(false);
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(109, 8, 8, 0.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
            style={{
              padding: "10px 14px",
              cursor: "pointer",
              transition: "background-color 0.2s ease",
              color: selected === opt ? "#6D0808" : "#2D0000",
              fontWeight: selected === opt ? "bold" : "normal",
            }}
          >
            {opt === "All" ? "All Countries" : opt}
          </div>
        ))}
      </div>
    </div>
  );
};

// 3. Komponen Khusus untuk Efek Teks Bergulir
const HoverLink = ({
  text,
  href,
  onClick,
  defaultColor = "#2D0000",
  hoverColor = "#6D0808",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "inline-block",
        overflow: "hidden",
        textDecoration: "none",
        height: "20px",
        lineHeight: "20px",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.4s cubic-bezier(0.76, 0, 0.24, 1)",
          transform: isHovered ? "translateY(-20px)" : "translateY(0)",
        }}
      >
        <span style={{ color: defaultColor }}>{text}</span>
        <span style={{ color: hoverColor }}>{text}</span>
      </div>
    </a>
  );
};

// 4. Komponen Metadata Kiri (Tanpa teks negara)
function MovieMetadata({ movie, isVisible }) {
  if (!movie) return null;

  return (
    <div
      style={{
        maxWidth: "400px",
        fontFamily: "Bricolage Grotesque, serif",
        color: "#2D0000",
        marginTop: "20px",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(15px)",
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "normal",
          letterSpacing: "1px",
          margin: "0 0 24px 0",
          textTransform: "uppercase",
        }}
      >
        {movie.title}
      </h1>

      <div
        style={{
          borderTop: "1px solid #2D0000",
          borderBottom: "1px solid #2D0000",
          fontSize: "13px",
          lineHeight: "1.4",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "12px 0",
            borderBottom: "1px solid rgba(45, 0, 0, 0.2)",
          }}
        >
          <span
            style={{
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontSize: "11px",
            }}
          >
            DIRECTED BY
          </span>
          <span style={{ textAlign: "right" }}>{movie.direction}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "12px 0",
            borderBottom: "1px solid rgba(45, 0, 0, 0.2)",
          }}
        >
          <span
            style={{
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontSize: "11px",
            }}
          >
            GENRE
          </span>
          <span style={{ textAlign: "right" }}>{movie.Genre}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "12px 0",
            borderBottom: "1px solid rgba(45, 0, 0, 0.2)",
          }}
        >
          <span
            style={{
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontSize: "11px",
            }}
          >
            YEAR
          </span>
          <span style={{ textAlign: "right" }}>{movie.year}</span>
        </div>

        {(movie.episode || movie.Episode) && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "12px 0",
              borderBottom: "1px solid rgba(45, 0, 0, 0.2)",
            }}
          >
            <span
              style={{
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontSize: "11px",
              }}
            >
              EPISODE
            </span>
            <span style={{ textAlign: "right" }}>
              {movie.episode || movie.Episode}
            </span>
          </div>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "12px 0",
            alignItems: "flex-start",
          }}
        >
          <span
            style={{
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontSize: "11px",
            }}
          >
            STARRING
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "right",
            }}
          >
            {movie.starring.map((actor, index) => (
              <span key={index}>{actor}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// 5. Komponen Utama App
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("movies");
  const [selectedCountry, setSelectedCountry] = useState("All");

  // Memilih data dasar dan menyaring berdasarkan negara
  const baseData = activeCategory === "movies" ? DataFilm : DataTV;
  const filteredData =
    selectedCountry === "All"
      ? baseData
      : baseData.filter((movie) => movie.country === selectedCountry);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<span key={i}>{i < rating ? "★" : "☆"}</span>);
    }
    return stars;
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isCategoryChanging, setIsCategoryChanging] = useState(false);

  const handleWheel = (e) => {
    if (isScrolling || filteredData.length <= 1) return;

    if (e.deltaY > 0 && currentIndex < filteredData.length - 1) {
      changeMovie(currentIndex + 1);
    } else if (e.deltaY < 0 && currentIndex > 0) {
      changeMovie(currentIndex - 1);
    }
  };

  const changeMovie = (newIndex) => {
    setIsScrolling(true);
    setIsVisible(false);

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsVisible(true);

      setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    }, 400);
  };

  const switchCategory = (category) => {
    if (activeCategory === category) return;
    setIsCategoryChanging(true);
    setIsVisible(false);

    setTimeout(() => {
      setActiveCategory(category);
      setSelectedCountry("All"); // Mengembalikan filter negara ke "All"
      setCurrentIndex(0);

      setIsCategoryChanging(false);
      setIsVisible(true);
    }, 500);
  };

  const handleCountrySelect = (country) => {
    if (selectedCountry === country) return;
    setIsCategoryChanging(true);
    setIsVisible(false);

    setTimeout(() => {
      setSelectedCountry(country);
      setCurrentIndex(0);

      setIsCategoryChanging(false);
      setIsVisible(true);
    }, 500);
  };

  return (
    <div
      onWheel={handleWheel}
      style={{
        backgroundColor: "#EEEAD7",
        color: "#2D0000",
        minHeight: "100vh",
        fontFamily: "serif",
        padding: "2rem",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* Navbar Container */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between", // Memberikan jarak antara menu dan dropdown
          alignItems: "center",
          borderBottom: "1px solid #757D6F",
          paddingBottom: "1rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "3rem" }}>
          <div
            style={{
              fontSize: "24px",
              letterSpacing: "2px",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            moViews
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              fontSize: "14px",
              letterSpacing: "1px",
            }}
          >
            <HoverLink
              text="Movies Reco"
              href="#movies"
              onClick={() => switchCategory("movies")}
              defaultColor={activeCategory === "movies" ? "#6D0808" : "#2D0000"}
            />
            <HoverLink
              text="TV Shows Reco"
              href="#tv"
              onClick={() => switchCategory("tv")}
              defaultColor={activeCategory === "tv" ? "#6D0808" : "#757D6F"}
            />
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                onClick={() => setIsOpen(!isOpen)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  cursor: "pointer",
                }}
              >
                <HoverLink text="Index" href="#" />
                <span style={{ fontSize: "10px" }}>▼</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dropdown Filter Negara */}
        <CuteDropdown
          options={["All", "Malaysia", "Indonesia", "USA", "China", "Thailand"]}
          selected={selectedCountry}
          onSelect={handleCountrySelect}
        />
      </div>

      {/* Bagian Bawah (Kiri & Kanan) */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "40px",
          height: "500px",
        }}
      >
        {/* KIRI: Metadata */}
        <div style={{ flex: "0 0 40%", paddingRight: "40px" }}>
          {filteredData.length > 0 ? (
            <MovieMetadata
              movie={filteredData[currentIndex]}
              isVisible={isVisible}
            />
          ) : (
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transition: "opacity 0.5s ease",
                fontStyle: "italic",
              }}
            >
              Tiada rekod untuk negara ini dalam kategori {activeCategory}.
            </div>
          )}
        </div>

        {/* KANAN: Karousel Tiket Mendatar */}
        <div
          style={{
            flex: " 0 0 50%",
            position: "relative",
            height: "100%",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: `translateX(calc(-${currentIndex * 250}px))`,
            }}
          >
            {filteredData.map((movie, index) => {
              const isActive = index === currentIndex;

              return (
                <div
                  key={movie.id}
                  style={{
                    marginRight: "40px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    opacity: isVisible ? (isActive ? 1 : 0.4) : 0,
                    transform: isVisible
                      ? isActive
                        ? "scale(1)"
                        : "scale(0.85)"
                      : "scale(0.8)",
                  }}
                >
                  {/* Reka Bentuk Tiket */}
                  <div
                    style={{
                      width: "210px",
                      height: "360px",
                      backgroundColor: movie.ticketColor,
                      color: "#EEEAD7",
                      borderRadius: "16px",
                      display: "flex",
                      flexDirection: "column",
                      padding: "24px",
                      boxShadow: isActive
                        ? "0 20px 40px rgba(45,0,0,0.3)"
                        : "none",
                      position: "relative",
                      transition: "clip-path 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      clipPath: !isCategoryChanging
                        ? "circle(150% at 50% 50%)"
                        : "circle(0% at 50% 50%)",
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        margin: "0.5px 0",
                        borderRadius: "8px",
                        overflow: "hidden",
                        backgroundColor: "#1a0000",
                      }}
                    >
                      <img
                        src={movie.poster}
                        alt={movie.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <div
                      style={{
                        borderTop: "2px dashed rgba(238, 234, 215, 0.5)",
                        paddingTop: "20px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-end",
                        }}
                      >
                        <div>
                          <div
                            style={{
                              fontSize: "10px",
                              letterSpacing: "2px",
                              opacity: 0.7,
                            }}
                          >
                            DATE
                          </div>
                          <div style={{ fontSize: "16px" }}>{movie.year}</div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            gap: "2px",
                            height: "30px",
                          }}
                        >
                          {[...Array(12)].map((_, i) => (
                            <div
                              key={i}
                              style={{
                                width: i % 3 === 0 ? "4px" : "2px",
                                backgroundColor: "#EEEAD7",
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bagian Ulasan di bawah Tiket */}
                  <div
                    style={{
                      marginTop: "30px",
                      textAlign: "center",
                      color: "#2D0000",
                      transition: "opacity 0.4s ease",
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    <div
                      style={{
                        fontSize: "18px",
                        letterSpacing: "4px",
                        color: "#6D0808",
                        marginBottom: "8px",
                      }}
                    >
                      {renderStars(movie.rating)}
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        fontStyle: "italic",
                        fontWeight: "500",
                        lineHeight: "1.4",
                      }}
                    >
                      {movie.review}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
