function Header() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="[@media(min-width:1400px)]:max-w-[1400px] w-full mr-auto ml-auto px-8 flex h-14 items-center">
        <div className="mr-4 md:flex">
          <a className="mr-6 flex items-center space-x-2" href="#">
            <svg
              width="34"
              height="35"
              viewBox="0 0 34 35"
              fill="#0f172a"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M26.6934 27.979C26.6934 27.195 27.3526 26.5594 28.1658 26.5594H29.8837C30.6969 26.5594 31.3562 27.195 31.3562 27.979C31.3562 28.763 30.6969 29.3986 29.8837 29.3986H28.1658C27.3526 29.3986 26.6934 28.763 26.6934 27.979Z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.9817 21.1651C18.1667 21.7447 17.732 22.1662 17.0799 23.4309L14.7977 22.2189C15.5041 20.6909 16.2105 19.9532 17.5146 19.0574C18.7644 18.267 19.8511 17.7928 22.2964 17.7401L22.242 20.322C20.4489 20.322 19.7425 20.7435 18.9817 21.1651Z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.2655 26.7282C25.2655 28.786 22.9683 30.0722 21.1305 29.0433L5.68673 20.3969C3.84891 19.3679 3.84891 16.7956 5.68673 15.7667L21.1305 7.12029C22.9683 6.09137 25.2655 7.37752 25.2655 9.43538L25.2655 26.7282ZM21.4069 25.8307C21.7882 26.0441 22.2582 25.7809 22.2582 25.354L22.2582 10.8318C22.2582 10.3999 21.7782 10.125 21.3969 10.3385L8.42757 17.5996C8.04627 17.8131 8.05181 18.3536 8.43752 18.5695L21.4069 25.8307Z"
              />
              <path d="M13.6508 6.84779C14.371 8.05751 13.9436 9.60436 12.6961 10.3028C11.4486 11.0012 9.85346 10.5867 9.13322 9.37703C8.41297 8.16731 8.8404 6.62046 10.0879 5.92203C11.3354 5.2236 12.9306 5.63808 13.6508 6.84779Z" />
            </svg>

            <span className="font-bold">Vixatica</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
