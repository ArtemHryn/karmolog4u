import styles from "./Circles.module.scss";

const Circles = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 136 140"
        fill="none"
        className={`${styles.circles} ${styles.circles1}`}
      >
        <g filter="url(#a)">
          <path
            fill="rgba(206, 180, 144, 0.40)"
            fillOpacity={0.6}
            d="M132.291 66.793c-.019-.02-2.049-1.188-3.39-2.97-.824-1.091-1.513-2.394-2.26-3.773-.364-.67-.728-1.36-1.111-2.03.153-.442.306-.901.498-1.323.747-1.705 2.183-3.027 2.203-3.046.344-.306.478-.804.344-1.245a1.254 1.254 0 0 0-.938-.881c-.019 0-1.456-.326-3.199-1.782-.862-.709-1.666-1.609-2.509-2.586 0-.575 0-1.13-.019-1.705-.039-1.61-.058-3.122.134-4.502.383-2.701 1.417-4.157 1.417-4.176.288-.383.326-.881.115-1.303a1.235 1.235 0 0 0-1.111-.69c-.019 0-2.375-.018-4.424-.919-1.245-.556-2.49-1.34-3.831-2.184-.517-.326-1.054-.651-1.571-.977-.383-1.188-.728-2.299-.881-3.372-.345-2.24.134-3.64.134-3.64.153-.44.058-.938-.268-1.283s-.804-.479-1.264-.345c-.019 0-1.896.537-3.735.326-.671-.077-1.379-.25-2.107-.44-.268-.46-.556-.92-.824-1.342-.766-1.226-1.436-2.28-1.973-3.563-1.053-2.51-.919-4.291-.919-4.31.057-.46-.172-.92-.575-1.169a1.228 1.228 0 0 0-1.302-.019c-.02.02-2.03 1.188-4.272 1.475-1.321.173-2.47.134-3.811.077-.537-.02-1.092-.02-1.686-.039-.574-.593-1.11-1.168-1.551-1.762-1.111-1.494-1.552-3.39-1.57-3.41a1.223 1.223 0 0 0-.901-.92 1.27 1.27 0 0 0-1.245.384c0 .019-.996 1.11-3.122 1.915-1.015.384-2.165.633-3.371.882a43.947 43.947 0 0 0-1.629-.882c-1.379-.747-2.7-1.436-3.792-2.26-1.781-1.341-2.969-3.372-2.969-3.391-.23-.402-.67-.594-1.13-.613a1.25 1.25 0 0 0-1.073.728c0 .02-.766 1.628-2.93 3.295-1.111.843-2.452 1.57-3.87 2.337-.497.268-.995.537-1.474.824-1.245-.268-2.433-.517-3.486-.9-2.126-.805-3.103-1.897-3.103-1.897a1.23 1.23 0 0 0-1.245-.402c-.46.115-.805.479-.92.92 0 .018-.46 1.934-1.57 3.41-.498.689-1.054 1.302-1.59 1.934-.575.02-1.15.02-1.705.038-1.398.058-2.739.096-4.06-.057-2.222-.268-4.253-1.418-4.272-1.437-.402-.23-.9-.21-1.302.038-.383.25-.613.71-.575 1.169 0 .02.153 1.8-.88 4.33-.537 1.283-1.17 2.318-1.916 3.524a28.43 28.43 0 0 0-.805 1.36c-.019 0-.057.02-.076.02-1.284.364-2.49.708-3.62.843-1.84.23-3.736-.307-3.736-.326-.46-.134-.938 0-1.245.345a1.232 1.232 0 0 0-.268 1.264c0 .02.48 1.418.134 3.66-.172 1.091-.536 2.26-.92 3.486a58.16 58.16 0 0 0-1.436.881c-1.36.862-2.643 1.667-3.945 2.222-2.51 1.073-4.29.939-4.31.939-.46-.038-.92.172-1.169.575-.248.402-.248.9-.019 1.302.02.02 1.207 2.03 1.475 4.253.173 1.341.134 2.72.096 4.196-.02.632-.02 1.264-.02 1.915-.746.862-1.474 1.667-2.24 2.3-1.667 1.378-3.046 1.685-3.046 1.704a1.28 1.28 0 0 0-.957.881c-.134.46 0 .939.344 1.265.02.019 1.399 1.302 2.107 2.912.44.996.747 2.126 1.092 3.352l-.057.115c-.728 1.38-1.437 2.701-2.241 3.774-1.341 1.782-3.372 2.97-3.39 2.989-.441.191-.671.632-.652 1.091.02.46.307.882.728 1.073.02 0 1.628.766 3.294 2.931 1.15 1.495 1.743 2.567 2.165 3.468-.287 1.168-.575 2.28-.977 3.237-.69 1.629-2.03 2.931-2.05 2.95-.325.326-.46.805-.325 1.246.134.44.498.785.958.88.019 0 1.398.288 3.083 1.63.728.574 1.418 1.321 2.146 2.106 0 .614.019 1.207.019 1.82.038 1.571.076 3.046-.096 4.406-.287 2.184-1.475 4.215-1.475 4.234-.23.402-.23.9.02 1.303.248.402.67.613 1.168.575.019 0 1.8-.135 4.31.938 1.283.556 2.585 1.36 3.945 2.223.479.306.958.593 1.437.881.383 1.226.747 2.375.92 3.486.344 2.242-.135 3.64-.135 3.64-.153.441-.057.939.268 1.284.326.345.805.479 1.264.345.02 0 1.897-.556 3.735-.326 1.13.134 2.337.479 3.62.843.345.594.71 1.168 1.073 1.762.843 1.322 1.628 2.586 2.165 3.832.88 2.05.9 4.387.9 4.425 0 .46.268.881.69 1.111.172.096.383.134.574.134.249 0 .517-.076.728-.23.019-.019 1.475-1.034 4.175-1.398 1.36-.192 2.49-.153 3.793-.115.46.019.996.019 1.513.019.575.594 1.13 1.188 1.59 1.782 1.11 1.494 1.551 3.39 1.57 3.41.116.459.46.804.92.919.096.019.21.038.306.038.345 0 .69-.153.939-.421 0-.019.996-1.111 3.122-1.916 1.034-.402 2.222-.651 3.486-.9.498.268.977.555 1.475.824 1.417.766 2.758 1.494 3.87 2.337 2.164 1.667 2.93 3.276 2.93 3.295.191.421.613.709 1.072.747h.058c.44 0 .862-.23 1.072-.632.02-.019 1.169-2.05 2.97-3.391 1.091-.824 2.394-1.513 3.792-2.261.536-.287 1.092-.593 1.628-.881 1.207.249 2.375.498 3.371.881 2.126.805 3.103 1.897 3.122 1.916.25.288.594.441.939.441a1.275 1.275 0 0 0 1.207-.958c0-.019.46-1.935 1.57-3.41.479-.651 1.092-1.303 1.743-1.954.383 0 .766-.019 1.15-.019 1.608-.058 3.121-.096 4.52.076 2.7.345 4.175 1.361 4.195 1.361.21.153.478.229.727.229.192 0 .383-.038.575-.134.421-.21.67-.651.67-1.111 0-.019-.019-2.356.881-4.425.537-1.245 1.322-2.51 2.146-3.851.268-.44.555-.9.823-1.36a12.718 12.718 0 0 1 1.628-.306c1.839-.23 3.716.306 3.735.325.46.134.939 0 1.245-.344.326-.345.422-.824.269-1.265 0-.019-.479-1.417-.134-3.659.172-1.073.517-2.203.881-3.371.536-.326 1.053-.652 1.57-.977 1.322-.843 2.586-1.629 3.831-2.184 2.05-.901 4.386-.92 4.425-.92.459 0 .881-.268 1.091-.69.211-.421.173-.92-.095-1.302 0-.02-1.035-1.475-1.418-4.177-.191-1.379-.172-2.892-.134-4.501.019-.575.019-1.13.019-1.705.843-.958 1.648-1.878 2.51-2.587 1.743-1.456 3.179-1.762 3.198-1.762.46-.096.824-.44.958-.881.134-.46 0-.939-.345-1.265-.019-.019-1.455-1.34-2.202-3.046a11.072 11.072 0 0 1-.441-1.207c.345-.593.67-1.206.996-1.8.766-1.418 1.475-2.759 2.337-3.87 1.647-2.165 3.275-2.931 3.275-2.931.422-.192.709-.613.728-1.073-.057-.536-.306-.996-.709-1.226Zm-7.048-13.544a11.675 11.675 0 0 0-1.494 2.433c-.633 1.418-1.035 2.854-1.418 4.234-.574 2.088-1.13 3.908-2.279 5.115a11.061 11.061 0 0 1-1.647-1.744c-.805-1.092-1.494-2.413-2.222-3.812-.92-1.762-1.916-3.659-3.276-5.192.269-1.666.192-3.065.096-4.425-.077-1.245-.172-2.414.019-3.793.096-.67.23-1.264.383-1.782 2.663.02 4.54 2.127 6.513 4.368.919 1.054 1.877 2.146 2.93 3.008a11.418 11.418 0 0 0 2.395 1.59ZM93.293 108c-.632 1.322-.976 2.51-1.149 3.429-.92-.421-2.126-.881-3.41-1.111-1.531-.268-3.179-.287-4.768-.326-3.736-.076-7.26-.134-9.328-2.931-.441-.594-.863-1.436-1.207-2.394a50.93 50.93 0 0 1 2.356-1.322c3.467-1.858 7.393-3.966 8.236-8.525.287.038.594.077.881.077 3.046 0 5.842-1.61 8.39-3.066a43.46 43.46 0 0 1 2.911-1.532c1.456 1.513 2.299 2.835 2.758 4.348.977 3.276-.996 6.131-3.084 9.158-.919 1.36-1.896 2.758-2.586 4.195Zm-25.34 11.111a14.827 14.827 0 0 0-2.586-2.529c-1.264-.977-2.758-1.781-4.195-2.548-1.187-.632-2.394-1.302-3.467-2.049 1.61-.556 3.084-1.475 4.252-3.046.767-1.016 1.284-2.146 1.648-3.506.076.057.172.096.23.153 2.164 1.667 2.93 3.276 2.93 3.295.192.422.613.709 1.073.747h.057c.44 0 .862-.23 1.073-.632.019-.019.9-1.552 2.317-2.854.384.919.824 1.762 1.303 2.414 1.494 2.011 3.467 2.95 5.593 3.429-1.111.785-2.375 1.475-3.62 2.126-1.398.747-2.854 1.533-4.1 2.452-1.014.786-1.876 1.744-2.508 2.548Zm-25.245-7.395a1.696 1.696 0 0 0-.288-.095 14.014 14.014 0 0 0-1.11-3.219c-.69-1.436-1.648-2.835-2.587-4.176-2.087-3.027-4.06-5.9-3.083-9.157.517-1.705 1.532-3.2 3.39-4.98 1.13.478 2.28 1.11 3.486 1.8 2.547 1.456 5.344 3.065 8.39 3.065.306 0 .612-.057.938-.077.862 4.483 4.731 6.571 8.14 8.43.48.268.94.517 1.399.785-.288 1.398-.728 2.49-1.418 3.41-2.068 2.797-5.593 2.854-9.328 2.931-1.59.038-3.237.057-4.769.326-1.188.153-2.28.555-3.16.957ZM23.554 51.218c.038-1.59.076-3.237-.115-4.789-.173-1.303-.575-2.529-.958-3.448.92-.134 2.126-.44 3.467-1.016 1.475-.632 2.892-1.532 4.29-2.394a47.76 47.76 0 0 1 2.701-1.61 8.302 8.302 0 0 0 .326 3.238c.536 1.763 1.494 3.314 3.026 5-2.299.767-3.85.594-3.87.594-.459-.057-.919.134-1.187.517a1.272 1.272 0 0 0-.076 1.303c0 .02.574 1.073.957 2.49-1.206-.191-2.317-.153-3.582.077-2.145.402-3.715 1.494-4.98 2.874-.038-.92-.019-1.878 0-2.836Zm17.755-24.06c.632-1.323.977-2.51 1.15-3.43.919.421 2.126.881 3.409 1.111 1.532.268 3.18.287 4.77.326 3.734.076 7.259.134 9.327 2.93.824 1.112 1.303 2.415 1.571 4.215.02.077.057.154.077.23-.537.307-1.092.613-1.648.92-3.237 1.743-6.838 3.735-7.949 7.72-3.945-.881-7.853 1.15-11.339 2.989-.67.344-1.321.69-1.953 1.015-1.648-1.648-2.605-3.065-3.084-4.674-.977-3.276.996-6.13 3.084-9.157.919-1.36 1.896-2.76 2.585-4.196Zm24.058-7.798c1.168-.9 2.011-1.782 2.586-2.529.632.786 1.494 1.744 2.547 2.53 1.245.919 2.7 1.704 4.1 2.451 1.09.575 2.183 1.169 3.198 1.84-1.954.497-3.754 1.474-5.153 3.333-.632.843-1.187 2.03-1.628 3.276-1.225-1.207-2.01-2.53-2.01-2.548a1.238 1.238 0 0 0-1.13-.613 1.25 1.25 0 0 0-1.074.728c0 .019-.766 1.628-2.93 3.275-.364-1.82-.939-3.237-1.877-4.502-1.073-1.455-2.414-2.337-3.85-2.911.957-.633 2.01-1.226 3.064-1.782 1.399-.785 2.893-1.59 4.157-2.548Zm27.926 8.18c.69 1.437 1.648 2.835 2.586 4.177 2.088 3.026 4.061 5.9 3.084 9.157-.421 1.398-1.187 2.643-2.47 4.023-.422-.211-.863-.441-1.303-.67-3.429-1.802-7.279-3.794-11.34-2.836-1.015-4.234-4.75-6.265-8.102-8.046a41.895 41.895 0 0 1-2.643-1.514c.364-1.302.939-2.586 1.532-3.371 2.07-2.797 5.593-2.855 9.329-2.931 1.59-.039 3.237-.058 4.769-.326 1.302-.23 2.49-.69 3.41-1.111.19.939.517 2.126 1.148 3.448Zm18.197 14.675c-.364.862-.728 2.03-.919 3.486-.23 1.648-.135 3.008-.039 4.31.058.748.096 1.495.077 2.261a8.22 8.22 0 0 0-2.988-1.13c-1.284-.23-2.643-.192-4.003.038.402-1.437.976-2.548.976-2.567.23-.402.192-.9-.076-1.303a1.251 1.251 0 0 0-1.188-.536c-.019 0-1.8.21-4.348-.766a.272.272 0 0 0-.115-.039c1.226-1.456 2.031-2.854 2.49-4.406.441-1.456.422-2.835.173-4.138.785.44 1.57.939 2.337 1.437 1.34.862 2.739 1.743 4.156 2.375 1.207.556 2.452.843 3.467.978Zm-10.784 14.789c.058 3.716.096 7.529-1.858 10.057-.038-.038-.076-.096-.134-.134-1.992-1.762-6.014-3.371-8.62-3.065-.823-5.421-3.581-10.192-7.565-13.62.977-1.667 1.532-4.158 1.59-6.322 3.294-.92 6.646.804 9.922 2.51 1.398.727 2.72 1.417 4.06 1.934 1.38.517 2.567.766 3.505.862-.344.939-.708 2.184-.804 3.487-.134 1.36-.115 2.777-.096 4.29Zm-4.271 30.479c-1.494.555-2.97 1.398-4.386 2.222-3.2 1.82-6.226 3.563-9.386 2.299-1.781-.709-3.314-2.012-5.152-4.406C85.115 83.996 90.4 76.257 90.4 67.29c0-.325-.038-.632-.038-.938 1.609-.25 5.095 1.015 6.742 2.452 2.605 2.298 2.375 5.823 2.126 9.54-.095 1.59-.21 3.237-.076 4.79.115 1.302.46 2.547.823 3.486-.977.096-2.183.345-3.543.862ZM71.38 103.038c-.115.058-.21.115-.287.192-.192.134-.402.249-.594.383-1.053.785-1.915 1.743-2.528 2.529a14.788 14.788 0 0 0-2.586-2.529c-1.264-.977-2.758-1.782-4.195-2.548-3.237-1.743-6.301-3.41-6.914-6.762v-.077c2.279-.958 4.175-2.644 6.416-5.67a22.48 22.48 0 0 0 7.221 1.207c2.529 0 4.942-.441 7.221-1.207 2.26 3.046 4.176 4.731 6.474 5.69v.076c-.574 3.429-3.696 5.096-6.971 6.839a32.144 32.144 0 0 0-3.257 1.877ZM39.375 87.483c-1.38-.517-2.567-.767-3.505-.862.344-.958.708-2.184.804-3.487.134-1.552.02-3.2-.077-4.79-.249-3.716-.479-7.24 2.127-9.54 1.647-1.455 5.114-2.7 6.742-2.451-.02.306-.039.632-.039.938 0 8.966 5.287 16.686 12.891 20.307-1.839 2.394-3.39 3.716-5.152 4.406-3.18 1.264-6.206-.48-9.386-2.299-1.456-.824-2.911-1.667-4.405-2.222ZM34.93 52.732a13.134 13.134 0 0 0-.824-3.487c.939-.096 2.146-.345 3.506-.862 1.36-.517 2.758-1.245 4.214-2.011 3.294-1.724 6.684-3.487 9.787-2.72-.057 1.953.422 4.06 1.475 6.743a22.425 22.425 0 0 0-7.393 13.467c-2.605-.306-6.628 1.303-8.62 3.065l-.115.115c-2.375-2.644-2.221-6.322-2.05-9.904.078-1.552.154-3.008.02-4.406Zm19.307-10.307c.613-3.352 3.678-5.019 6.915-6.762 1.437-.786 2.93-1.59 4.195-2.548 1.168-.9 2.01-1.782 2.585-2.529.613.786 1.475 1.724 2.51 2.51.134.421.479.766.938.862.115.019.25.019.364 0a51.69 51.69 0 0 0 2.835 1.628c3.294 1.763 6.398 3.41 6.972 6.84.306 1.838-.192 4.693-1.015 6.302a22.29 22.29 0 0 0-12.642-3.908 22.385 22.385 0 0 0-12.756 3.985c-.958-2.663-1.226-4.579-.9-6.38Zm13.657 44.847c-11.013 0-19.997-8.966-19.997-20 0-11.015 8.964-20 19.997-20 11.014 0 19.997 8.965 19.997 20 0 11.034-8.964 20-19.997 20ZM22.251 60.739c1.705-3.314 3.314-6.456 6.723-7.088 1.034-.191 2.069-.23 3.505.096.039 1.035 0 2.127-.038 3.295-.192 4.042-.364 8.582 2.969 11.973-1.705 2.874-1.494 6.341-1.283 9.502.038.69.076 1.341.114 1.973-1.838.556-3.332.728-4.788.48-3.371-.556-5.076-3.583-6.876-6.801-.805-1.418-1.629-2.893-2.625-4.157a15.096 15.096 0 0 0-2.566-2.548c.785-.633 1.724-1.514 2.49-2.587.9-1.245 1.647-2.72 2.375-4.137Zm.23 31.84c.383-.94.785-2.146.957-3.449.173-1.34.192-2.988.211-4.731.02-1.341.038-2.702.115-3.947 1.34 1.475 3.007 2.606 5.268 2.989.593.095 1.187.153 1.78.153 1.054 0 2.165-.153 3.353-.46-.23 2.146-1.264 4.119-1.283 4.138-.23.402-.192.9.076 1.303a1.25 1.25 0 0 0 1.188.536c.019 0 .88-.096 2.24.172-1.608 1.725-2.585 3.296-3.14 5.115a8.304 8.304 0 0 0-.326 3.238 66.7 66.7 0 0 1-2.7-1.61c-1.38-.861-2.817-1.762-4.291-2.394a12.175 12.175 0 0 0-3.448-1.053Zm78.876 1.36c-.478-1.61-1.34-3.065-2.643-4.56 1.781-.44 2.931-.325 2.931-.325.479.057.938-.135 1.187-.518.268-.383.288-.88.077-1.302-.019-.02-1.111-2.05-1.303-4.291 1.418.402 2.682.612 3.889.612.651 0 1.264-.057 1.896-.172a8.317 8.317 0 0 0 3.007-1.13c.019.881.019 1.781 0 2.663-.038 1.628-.057 3.333.153 4.904.211 1.456.575 2.624.92 3.487-.996.153-2.26.44-3.448.957-1.417.633-2.816 1.514-4.156 2.376a59.54 59.54 0 0 1-2.337 1.437c.249-1.303.268-2.663-.173-4.138Zm5.613-13.008c-1.609.287-3.257.077-5.383-.613.019-.594.058-1.188.096-1.8.211-3.142.402-6.61-1.264-9.464 2.873-3.238 2.835-7.893 2.777-12.07-.019-1.13-.019-2.164.039-3.16 1.359-.345 2.7-.422 3.945-.192 3.429.613 5.057 3.717 6.8 7.03.747 1.419 1.513 2.874 2.433 4.12a13.755 13.755 0 0 0 2.509 2.547l-.019.02c-.747.574-1.629 1.398-2.529 2.547-.977 1.265-1.8 2.74-2.586 4.177-1.781 3.218-3.447 6.264-6.818 6.858Zm10.075-44.77c1.206.536 2.451.804 3.447.958-.364.862-.727 2.05-.919 3.486-.172 1.265-.172 2.587-.172 3.89-1.399-1.303-2.969-2.357-4.961-2.644a1.244 1.244 0 0 0-1.015-1.954h-.039c.766-1.859.651-3.774.249-5.633 1.13.71 2.26 1.38 3.41 1.897Zm-7.873-11.322c-.057.766-.057 1.743.115 2.874.211 1.36.651 2.74 1.073 4.06.9 2.817 1.724 5.48.421 7.76a9.457 9.457 0 0 1-1.762-.575c-1.245-.556-2.509-1.341-3.831-2.184-1.551-.996-3.16-1.992-4.865-2.682-.69-1.341-1.57-2.605-2.394-3.812-.92-1.322-1.782-2.567-2.375-3.832a11.807 11.807 0 0 1-.939-2.72c2.222-1.322 4.885-.594 7.7.21 1.303.365 2.663.748 3.984.92 1.035.134 2.05.077 2.873-.019ZM94.96 15.49c1.302-.153 2.528-.555 3.467-.938.134.92.421 2.126.996 3.467.46 1.111 1.015 2.05 1.59 3.008-2.069-.498-4.233-.767-6.302-.058-.383-2.107-1.628-3.831-3.065-5.345 1.073.02 2.126.02 3.314-.134Zm-13.312-3.889a12.675 12.675 0 0 0 2.567-1.302c.325.766.766 1.667 1.379 2.51.613.823 1.36 1.609 2.107 2.356l.057.057c.192.192.383.402.594.594 1.762 1.743 3.41 3.41 3.869 5.46-.594.345-2.165 1.207-3.927 1.513-1.34.23-2.834.268-4.405.288-.958.019-1.935.038-2.911.115a1.295 1.295 0 0 0-.345-.518c-1.456-1.207-3.199-2.145-4.885-3.026-1.379-.748-2.7-1.437-3.792-2.261-.517-.383-.958-.824-1.36-1.245 1.34-2.26 4.08-2.855 6.972-3.448 1.398-.307 2.797-.614 4.08-1.093ZM65.367 8.996c1.168-.9 2.011-1.781 2.586-2.529.632.805 1.494 1.744 2.547 2.53 1.015.746 2.165 1.398 3.314 2.01-1.82.556-3.544 1.4-4.789 2.99l-.019-.04c-.23-.401-.67-.612-1.13-.612-.46.019-.843.287-1.053.69-1.226-1.59-2.931-2.434-4.75-3.008 1.149-.613 2.298-1.265 3.294-2.03Zm-15.17 3.793c.613-.823 1.072-1.743 1.379-2.51.632.422 1.494.901 2.567 1.303 1.283.48 2.7.786 4.06 1.073 2.93.613 5.67 1.207 7.01 3.506a15.02 15.02 0 0 1-1.36 1.207c-1.11.843-2.451 1.57-3.868 2.337-1.743.939-3.525 1.916-5.019 3.2-1.436-.192-2.892-.23-4.29-.25-1.571-.038-3.046-.057-4.406-.287-.498-.096-.996-.23-1.456-.383-.019-2.874 1.571-4.732 3.41-6.859.69-.727 1.36-1.494 1.973-2.337Zm-14.079 5.48c.556-1.361.843-2.549.977-3.487.939.383 2.165.766 3.467.92 1.36.152 2.644.133 3.965.076-1.053 1.437-1.896 3.065-2.126 5.115-.172-.115-.287-.173-.306-.173a1.27 1.27 0 0 0-1.303-.038c-.402.23-.651.67-.632 1.13v.153c-1.839-.919-3.773-.919-5.689-.593.613-.977 1.169-1.954 1.648-3.104ZM24.722 28.382c.172-1.13.191-2.107.115-2.873.823.095 1.839.153 2.854.038 1.321-.172 2.681-.556 3.984-.92 2.93-.823 5.689-1.59 7.968-.057-.153.46-.345.977-.613 1.513-.594 1.265-1.475 2.51-2.375 3.832-1.054 1.532-2.165 3.16-2.912 4.923-1.685.67-3.294 1.648-4.846 2.625-1.36.862-2.643 1.666-3.945 2.203-.632.268-1.207.46-1.724.593-1.36-2.298-.517-4.98.402-7.835.44-1.322.881-2.682 1.092-4.042Zm-7.796 8.487c1.169-.498 2.299-1.169 3.41-1.858-.403 1.858-.498 3.754.287 5.612-.44-.019-.881.192-1.13.556a1.212 1.212 0 0 0-.038 1.245c-1.954.288-3.544 1.341-4.923 2.625.019-1.245.038-2.471-.134-3.736-.173-1.303-.575-2.529-.958-3.448a13.68 13.68 0 0 0 3.486-.996Zm-5.574 15.096c1.015-.843 1.935-1.897 2.816-2.912 1.915-2.184 3.773-4.234 6.34-4.196.192.575.364 1.226.44 1.897.173 1.36.135 2.835.096 4.406-.038 1.896-.096 3.87.25 5.747.018.077.057.134.076.21-.479.825-.92 1.687-1.34 2.51-.71 1.399-1.4 2.72-2.184 3.832-.805 1.11-1.858 1.992-2.567 2.51-2.107-1.188-2.816-3.717-3.544-6.4-.344-1.264-.708-2.585-1.226-3.754-.402-.9-.919-1.686-1.417-2.318a14.3 14.3 0 0 0 2.26-1.532Zm-4.884 16.11c.804-.632 1.743-1.494 2.528-2.547.48-.652.92-1.36 1.341-2.088.632 1.647 1.552 3.199 3.065 4.272-1.686 1.13-2.624 2.797-3.256 4.578a30.3 30.3 0 0 0-1.15-1.647c-.9-1.15-1.781-1.993-2.528-2.567Zm2.662 14.1a11.55 11.55 0 0 0 1.36-2.318c.498-1.188.824-2.49 1.15-3.774.727-2.892 1.417-5.632 3.907-6.724.038-.019.057-.038.096-.057.632.46 1.456 1.168 2.317 2.26.862 1.092 1.61 2.414 2.395 3.832.402.708.804 1.436 1.245 2.145-.422 1.954-.46 4.406-.498 6.82-.02 1.667-.039 3.257-.192 4.445-.076.613-.23 1.187-.402 1.743-2.452 0-4.29-1.973-6.206-4.08a.506.506 0 0 1-.096-.115 62.343 62.343 0 0 1-.115-.115c-.842-.92-1.704-1.859-2.643-2.606-.862-.67-1.647-1.15-2.318-1.456Zm7.796 16.495a15.08 15.08 0 0 0-3.467-1.016c.383-.939.786-2.165.958-3.467.153-1.265.153-2.587.134-3.908 1.398 1.302 2.988 2.375 5 2.643-.04.058-.058.096-.058.096-.23.402-.23.9.019 1.303.23.383.67.594 1.13.575-.785 1.839-.67 3.754-.287 5.613-1.13-.67-2.26-1.341-3.429-1.84Zm7.91 11.379a12.75 12.75 0 0 0-.114-2.874c-.21-1.36-.651-2.739-1.073-4.061-.92-2.854-1.762-5.536-.402-7.835a12.37 12.37 0 0 1 1.724.594c1.283.555 2.567 1.36 3.946 2.203 1.551.977 3.14 1.954 4.846 2.624.747 1.763 1.858 3.391 2.911 4.924.92 1.321 1.781 2.567 2.375 3.831.268.536.46 1.054.613 1.513-2.28 1.552-5.038.786-7.968-.057-1.302-.364-2.662-.747-3.984-.92a12.854 12.854 0 0 0-2.873.058Zm16.148 10.421a13.922 13.922 0 0 0-3.506.92c-.153-.996-.42-2.261-.957-3.468-.556-1.283-1.341-2.548-2.107-3.774.728.135 1.456.211 2.183.211 1.207 0 2.395-.211 3.563-.785v.134c-.02.46.21.919.632 1.149.096.058.192.058.288.077.383 2.107 1.628 3.831 3.064 5.364-.996 0-1.992.019-3.16.172Zm13.159 3.87a12.626 12.626 0 0 0-2.567 1.303c-.326-.767-.766-1.667-1.38-2.51-.631-.843-1.378-1.628-2.144-2.395l-.058-.057c-.191-.192-.383-.383-.555-.575-1.916-1.896-3.755-3.716-3.965-6.015.766-.364 1.762-.747 2.835-.939 1.34-.23 2.834-.268 4.405-.287 1.303-.019 2.643-.058 3.984-.211a.922.922 0 0 0 .21.268c1.495 1.341 3.334 2.338 5.115 3.295 1.417.767 2.758 1.495 3.869 2.338.536.421.996.823 1.36 1.206-1.322 2.318-4.08 2.912-7.01 3.506-1.399.288-2.816.575-4.1 1.073Zm16.357 2.586c-1.053.786-1.915 1.744-2.528 2.529a14.824 14.824 0 0 0-2.586-2.529c-.996-.766-2.145-1.417-3.294-2.05 1.8-.574 3.524-1.417 4.75-3.007a1.24 1.24 0 0 0 1.053.709h.058c.44 0 .862-.23 1.072-.633 0 0 .02-.019.02-.038 1.245 1.571 2.968 2.414 4.788 2.989-1.188.632-2.337 1.283-3.333 2.03Zm15.113-3.793c-.613.824-1.073 1.743-1.38 2.51a12.629 12.629 0 0 0-2.566-1.303c-1.283-.479-2.7-.785-4.06-1.073-2.893-.594-5.632-1.188-6.973-3.448.403-.422.843-.862 1.36-1.245 1.092-.824 2.394-1.514 3.793-2.261 1.685-.9 3.428-1.82 4.884-3.027.287-.23.421-.555.44-.9.958.057 1.897.096 2.835.096 1.571.038 3.046.057 4.406.287 1.8.307 3.447 1.226 3.984 1.552-.326 2.203-2.069 3.965-3.927 5.804a8.675 8.675 0 0 1-.096.096 1.264 1.264 0 0 0-1.225 1.245 13.164 13.164 0 0 0-1.475 1.667Zm14.136-5.441c-.518 1.207-.786 2.472-.92 3.468-.881-.345-2.05-.69-3.505-.881-1.13-.154-2.318-.154-3.505-.134 1.436-1.571 2.643-3.334 2.95-5.518a8.247 8.247 0 0 0 2.623.422c1.399 0 2.778-.288 4.138-.632-.671 1.053-1.303 2.145-1.781 3.275Zm9.538-9.865c-.172 1.13-.191 2.107-.115 2.873-.823-.096-1.839-.153-2.854-.038a16.96 16.96 0 0 0-1.685.326c-.402-.115-.824 0-1.13.287-.383.096-.786.211-1.169.306-2.815.786-5.478 1.514-7.7.211.154-.728.422-1.647.939-2.72.594-1.265 1.475-2.51 2.375-3.832.824-1.207 1.705-2.471 2.413-3.812 1.705-.67 3.314-1.686 4.866-2.682 1.321-.843 2.585-1.647 3.83-2.184a10.51 10.51 0 0 1 1.763-.575c1.302 2.28.478 4.943-.422 7.759-.46 1.341-.9 2.72-1.111 4.081Zm7.758-8.449c-1.15.498-2.28 1.188-3.391 1.897.403-1.858.518-3.774-.249-5.632h.039c.459 0 .881-.269 1.091-.69.211-.402.173-.9-.095-1.283 1.973-.288 3.581-1.342 4.961-2.625-.02 1.303-.02 2.624.172 3.87.211 1.456.575 2.624.919 3.486-.996.173-2.241.46-3.447.977Zm5.784-15.498c-1.053.882-2.011 1.954-2.93 3.008-1.973 2.241-3.85 4.368-6.513 4.368a12.562 12.562 0 0 1-.383-1.782c-.191-1.38-.172-2.912-.134-4.521.038-1.57.057-3.18-.134-4.75 1.302-1.495 2.298-3.277 3.218-4.963.766-1.417 1.513-2.74 2.375-3.85.46-.594.919-1.092 1.36-1.475 1.513 1.379 2.126 3.64 2.777 6.034.364 1.322.728 2.682 1.264 3.89.422.938.977 1.78 1.494 2.432-.67.364-1.513.862-2.394 1.61Zm4.099-13.429c-.881 1.169-1.628 2.51-2.337 3.832-.593-2.07-1.36-4.215-2.892-5.824.383-.211.651-.575.69-1.016.019-.325-.115-.613-.326-.843 1.264-1.455 1.915-3.333 2.452-5.23.728 1.36 1.494 2.76 2.394 3.966.785 1.054 1.743 1.916 2.547 2.529a13.557 13.557 0 0 0-2.528 2.586Z"
          />
        </g>
        <defs>
          <filter
            id="a"
            width={136}
            height={136}
            x={0}
            y={0}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_125_1101"
              stdDeviation={1.5}
            />
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 86 87"
        fill="none"
        className={`${styles.circles} ${styles.circles2}`}
      >
        <g clipPath="url(#clip0_3771_6650)" filter="url(#filter0_f_3771_6650)">
          <path
            d="M82.6174 43.3598C82.6055 43.3477 81.5071 42.692 80.7789 41.7085C80.3371 41.1014 79.9551 40.3 79.5492 39.4622C78.6896 37.6652 77.7107 35.686 75.8244 35.0789C77.0899 33.6219 77.0063 31.4606 76.9108 29.5178C76.863 28.5829 76.8272 27.6965 76.9227 26.9437C77.0779 25.7174 77.7345 24.6003 77.7465 24.5882C77.9017 24.3332 77.8897 24.0175 77.7345 23.7625C77.5793 23.5075 77.2928 23.3618 77.0182 23.3861C77.0063 23.3861 76.0393 23.4589 74.6783 22.8518C73.9739 22.5483 73.2457 22.0383 72.4697 21.4919C70.8341 20.3506 68.9955 19.0999 67.0496 19.5735C67.6346 17.5336 66.3929 15.603 65.2827 13.8667C64.7812 13.0896 64.3037 12.3489 64.0172 11.6447C63.5516 10.5154 63.5516 9.2041 63.5516 9.19196C63.5516 8.90055 63.3964 8.62128 63.1337 8.48772C62.883 8.35415 62.5607 8.36629 62.3219 8.53628C62.31 8.53628 61.5101 9.09482 60.0417 9.27695C59.2895 9.37409 58.3941 9.31338 57.4629 9.25267C55.4931 9.11911 53.2964 8.98554 51.8518 10.3819C51.2907 8.39058 49.297 7.38278 47.4943 6.48427C46.6705 6.07144 45.8945 5.68289 45.2856 5.23363C44.3186 4.50511 43.662 3.37589 43.662 3.36375C43.5187 3.13305 43.2442 2.98734 42.9576 2.99948C42.6711 3.01163 42.4085 3.19376 42.2891 3.46088C42.2891 3.47303 41.8712 4.3594 40.7013 5.2822C40.0924 5.75574 39.3045 6.16857 38.4568 6.59355C36.7138 7.49206 34.7917 8.49986 34.2186 10.394C32.798 8.86412 30.5416 8.9734 28.524 9.08268C27.5808 9.13125 26.6974 9.17982 25.9333 9.07054C24.4649 8.86412 23.6769 8.29344 23.6769 8.29344C23.4382 8.11131 23.1278 8.08703 22.8651 8.22059C22.6025 8.35415 22.4353 8.62128 22.4353 8.92483C22.4353 8.93697 22.4234 10.2362 21.9339 11.3654C21.6354 12.0575 21.146 12.786 20.6326 13.5631C19.5223 15.2266 18.3046 17.0843 18.7463 19.0635C16.8481 18.6385 15.0334 19.8284 13.4098 20.9091C12.6219 21.4312 11.8817 21.929 11.1773 22.2326C9.80438 22.8033 8.8493 22.7304 8.83736 22.7304C8.55083 22.7061 8.26431 22.8397 8.10911 23.0825C7.95391 23.3375 7.94197 23.6532 8.08523 23.9082C8.09717 23.9203 8.72991 25.0495 8.87317 26.2759C8.96868 27.0409 8.92093 27.9151 8.86123 28.85C8.72991 30.9142 8.58665 33.209 10.079 34.6904C8.26431 35.3339 7.32117 37.2645 6.47353 39.0251C6.06762 39.8872 5.67365 40.7007 5.21999 41.32C4.33654 42.522 3.46502 42.9592 3.45309 42.9592C3.19044 43.0806 3.01136 43.3477 2.99942 43.6513C2.98748 43.9548 3.14268 44.2219 3.39339 44.3676C3.40533 44.3798 4.51561 45.0233 5.2558 45.9947C5.70947 46.6018 6.10344 47.391 6.52128 48.2167C7.36892 49.9044 8.31206 51.7622 10.0193 52.4421C8.70603 53.8992 8.80154 56.0726 8.89705 58.0397C8.9448 58.9989 8.99256 59.8974 8.88511 60.6623C8.68216 62.1558 8.12105 62.9572 8.12105 62.9572C7.94197 63.2 7.91809 63.5157 8.04941 63.7829C8.18074 64.05 8.44339 64.22 8.74185 64.22C8.75379 64.22 10.0431 64.2321 11.1415 64.73C11.8339 65.0335 12.5502 65.5313 13.3143 66.0534C14.723 67.0248 16.2631 68.0812 17.8987 68.0812C18.1613 68.0812 18.4359 68.0447 18.7105 67.984C18.3046 69.9146 19.4626 71.7481 20.5371 73.3873C21.0505 74.1887 21.5399 74.9415 21.8384 75.6578C22.3995 77.0542 22.3279 78.0256 22.3279 78.0377C22.2921 78.3291 22.4353 78.6205 22.6741 78.7784C22.8054 78.8634 22.9487 78.8998 23.0919 78.8998C23.2233 78.8998 23.3665 78.8634 23.4859 78.7905C23.4979 78.7784 24.6081 78.1348 25.8139 77.9891C26.5541 77.9041 27.4256 77.9527 28.3449 78.0134C30.3744 78.147 32.6308 78.2805 34.0873 76.7749C34.7201 78.6205 36.6183 79.5798 38.3494 80.4418C39.197 80.8547 39.9969 81.2554 40.6058 81.7168C41.7877 82.6153 42.2174 83.5016 42.2174 83.5138C42.3368 83.7809 42.5995 83.9631 42.8979 83.9752C42.9099 83.9752 42.9218 83.9752 42.9338 83.9752C43.2203 83.9752 43.471 83.8173 43.6143 83.5745C43.6143 83.5624 44.2589 82.4331 45.214 81.6803C45.8109 81.2189 46.5869 80.8182 47.3988 80.3933C49.0224 79.5555 50.8132 78.6084 51.5176 76.9328C52.9741 78.4991 55.2543 78.3291 57.2958 78.1834C58.2389 78.1105 59.1224 78.0498 59.8865 78.147C61.3549 78.3291 62.1548 78.8755 62.1548 78.8755C62.2861 78.9726 62.4413 79.0212 62.6084 79.0212C62.7278 79.0212 62.8591 78.9969 62.9666 78.9362C63.2292 78.8027 63.3844 78.5234 63.3844 78.232C63.3844 78.2198 63.3725 76.9206 63.8381 75.7793C64.1246 75.075 64.6022 74.3344 65.0916 73.5573C66.1064 71.9545 67.2167 70.1939 66.9302 68.3362C67.1809 68.3847 67.4316 68.4212 67.6704 68.4212C69.2701 68.4212 70.7983 67.4134 72.1951 66.4784C72.983 65.9563 73.7232 65.4585 74.4395 65.1671C75.8124 64.5964 76.7675 64.6814 76.7795 64.6814C77.066 64.7057 77.3525 64.5842 77.5196 64.3293C77.6748 64.0864 77.6868 63.7586 77.5435 63.5036C77.5316 63.4915 76.9108 62.3622 76.7675 61.1359C76.684 60.3831 76.7436 59.4967 76.8033 58.5739C76.9347 56.6069 77.066 54.4334 75.7886 52.94C77.639 52.345 78.6299 50.4023 79.5014 48.6417C79.9193 47.7917 80.3252 46.9782 80.7908 46.3589C81.6981 45.169 82.5696 44.7562 82.5816 44.744C82.8442 44.6226 83.0233 44.3676 83.0472 44.0641C83.0114 43.7848 82.8681 43.5056 82.6174 43.3598ZM44.4977 72.8166L52.2458 59.1931H67.5749C62.6443 67.0248 54.1918 72.3552 44.4977 72.8166ZM18.6986 59.1931H34.0157L41.7638 72.8166C32.0697 72.3552 23.6172 67.0248 18.6986 59.1931ZM14.15 43.372C14.15 38.5151 15.32 33.9376 17.3615 29.9064L25.014 43.372L17.3495 56.8376C15.32 52.8064 14.15 48.2288 14.15 43.372ZM41.7638 13.9395L34.0157 27.563H18.6986C23.6172 19.7192 32.0817 14.3888 41.7638 13.9395ZM67.5629 27.5508H52.2458L44.4977 13.9395C54.1918 14.3888 62.6443 19.7192 67.5629 27.5508ZM51.3504 57.6147H34.9111L26.8168 43.372L34.9111 29.1293H51.3504L59.4447 43.372L51.3504 57.6147ZM60.3401 44.9505L67.539 57.6147H53.1412L60.3401 44.9505ZM43.1248 72.0516L35.8065 59.181H50.4431L43.1248 72.0516ZM33.1203 57.6147H18.7224L25.9214 44.9505L33.1203 57.6147ZM25.9214 41.7935L18.7224 29.1293H33.1203L25.9214 41.7935ZM35.8184 27.5508L43.1367 14.6802L50.455 27.5508H35.8184ZM53.1412 29.1293H67.539L60.3401 41.7935L53.1412 29.1293ZM68.9 56.8376L61.2355 43.372L68.8881 29.9064C70.9415 33.9497 72.0996 38.5273 72.0996 43.372C72.1115 48.2288 70.9415 52.8064 68.9 56.8376ZM71.5981 22.8154C72.398 23.3739 73.2337 23.9446 74.0694 24.321C74.7738 24.6246 75.3946 24.7946 75.8841 24.8917C75.6811 25.4017 75.4782 26.0573 75.3827 26.7373C75.2633 27.6358 75.311 28.6315 75.3588 29.5907C75.4782 32.0798 75.4543 33.7676 74.0217 34.569C73.759 34.7147 73.1024 34.9454 72.5532 35.1032C71.24 30.2585 68.7926 25.8874 65.5214 22.2933C65.9632 21.9047 66.4765 21.5405 66.7869 21.3705C68.1837 20.5691 69.5925 21.4191 71.5981 22.8154ZM57.3555 10.8554C58.3225 10.9161 59.3253 10.989 60.2327 10.8797C60.9967 10.7826 61.6056 10.6126 62.0831 10.4305C62.1667 10.9768 62.31 11.6447 62.5726 12.2882C62.9188 13.126 63.4561 13.9517 63.9694 14.7652C65.3065 16.8415 66.1303 18.3107 65.3065 19.7556C65.1513 20.0349 64.6738 20.5934 64.256 21.0184C60.7938 17.6307 56.5437 15.0687 51.828 13.636C52.019 13.0531 52.2936 12.4339 52.4846 12.1061C53.2964 10.6854 54.932 10.6854 57.3555 10.8554ZM39.1612 8.00203C40.0327 7.55277 40.9281 7.09137 41.6444 6.52069C42.2533 6.04715 42.695 5.57361 43.0173 5.17292C43.3635 5.59789 43.8172 6.09572 44.3664 6.50855C45.0827 7.04281 45.9661 7.47992 46.8138 7.90489C49.0105 8.99768 50.455 9.83549 50.455 11.499C50.455 11.8147 50.3237 12.5553 50.1804 13.1381C47.9121 12.5917 45.5602 12.2882 43.1248 12.2882C40.5938 12.2882 38.1345 12.6039 35.7826 13.1989C35.6513 12.5917 35.5796 11.9361 35.5796 11.5597C35.5916 9.96905 37.0003 9.11911 39.1612 8.00203ZM21.9339 14.4616C22.4711 13.6603 23.0203 12.8346 23.3785 12.0089C23.6531 11.3775 23.8083 10.7097 23.8918 10.1633C24.3574 10.3455 24.9782 10.5397 25.7304 10.6369C26.6377 10.7704 27.6405 10.7097 28.6075 10.6612C31.0191 10.5276 32.6666 10.5519 33.4546 11.9725C33.6575 12.3368 33.956 13.0531 34.1351 13.6967C29.491 15.1537 25.3244 17.7157 21.922 21.0669C21.4802 20.6784 20.7281 19.792 20.5252 19.4278C19.7133 17.9828 20.561 16.5258 21.9339 14.4616ZM11.7862 23.7018C12.6338 23.3497 13.4695 22.779 14.2813 22.2326C16.2989 20.8727 17.7316 20.047 19.1164 20.8605C19.5343 21.1034 20.3103 21.6862 20.7878 22.2326C17.5883 25.7295 15.1767 29.9792 13.8277 34.6782C13.8038 34.6661 13.7799 34.654 13.756 34.654C13.2069 34.569 12.0369 34.1804 11.6668 33.9619C10.2461 33.124 10.2461 31.4363 10.4013 28.9593C10.461 28.0001 10.5207 27.0044 10.4252 26.1059C10.3416 25.4138 10.1506 24.7581 9.94764 24.2482C10.4491 24.151 11.0818 23.9932 11.7862 23.7018ZM7.90615 47.4882C7.47637 46.6261 7.03464 45.7397 6.49741 45.0233C6.07956 44.4648 5.59008 44.0155 5.16029 43.6755C5.55426 43.3477 6.00793 42.8863 6.46159 42.2671C7.01076 41.5264 7.45249 40.6036 7.87034 39.7172C8.93286 37.5074 9.74468 36.0503 11.3444 36.0382C11.7981 36.0382 12.7293 36.1231 13.4098 36.3417C12.8965 38.6123 12.6099 40.9678 12.6099 43.3841C12.6099 45.9097 12.9203 48.3624 13.4814 50.718C13.1233 50.7908 12.7413 50.9001 12.3831 51.0337C12.0249 51.1065 11.7026 51.1551 11.5116 51.1551C9.88795 51.1915 9.01643 49.7102 7.90615 47.4882ZM14.1858 64.7421C13.3979 64.1957 12.5861 63.6372 11.7742 63.2729C11.1534 62.9936 10.4968 62.8358 9.95958 62.7508C10.1387 62.2772 10.3297 61.6459 10.4252 60.8809C10.5565 59.9581 10.4968 58.9382 10.4491 57.9547C10.3297 55.5019 10.3416 53.8263 11.7384 53.025C11.9772 52.8914 12.3592 52.7093 12.7771 52.5514C13.171 52.4664 13.565 52.3693 13.8754 52.26C15.2483 56.9226 17.6719 61.1237 20.8594 64.5842C20.8117 64.6207 20.752 64.6571 20.7162 64.7057C20.3461 65.1428 19.4388 65.9563 19.0567 66.1749C17.636 67.0005 16.2034 66.1384 14.1858 64.7421ZM28.4285 76.4592C27.4853 76.3985 26.5064 76.3378 25.6229 76.4349C24.9424 76.5199 24.2977 76.7142 23.7963 76.9206C23.7127 76.4107 23.5575 75.7793 23.271 75.0629C22.9248 74.2008 22.3637 73.3508 21.8265 72.5252C20.4894 70.4732 19.6775 69.0161 20.4774 67.6076C20.7281 67.1705 21.325 66.3327 21.8862 65.8592C21.922 65.8227 21.9458 65.7742 21.9817 65.7377C25.3603 69.0404 29.4791 71.5781 34.0634 73.023C34.0634 73.0351 34.0515 73.0473 34.0515 73.0594C33.956 73.618 33.574 74.8079 33.3591 75.1843C32.5353 76.6171 30.8639 76.6171 28.4285 76.4592ZM46.6586 79.0091C45.8109 79.4462 44.9394 79.8954 44.2351 80.4418C43.6859 80.8668 43.2442 81.3646 42.9099 81.8018C42.5875 81.4011 42.1339 80.9397 41.525 80.4783C40.7968 79.9197 39.8894 79.4705 39.0179 79.0455C36.8451 77.9649 35.4125 77.1392 35.4006 75.5121C35.4006 75.0507 35.4841 74.1644 35.6751 73.4723C38.0628 74.0915 40.5699 74.4193 43.1487 74.4193C45.4886 74.4193 47.7569 74.1401 49.9536 73.6301C50.1208 74.2251 50.264 75.0022 50.2759 75.3422C50.264 77.0178 48.8433 77.8799 46.6586 79.0091ZM63.7545 72.7073C63.2412 73.5208 62.7039 74.3465 62.3577 75.1843C62.0951 75.8278 61.9518 76.4957 61.8802 77.042C61.4026 76.8599 60.7818 76.6899 60.0297 76.6049C59.1224 76.4957 58.1196 76.5685 57.1525 76.6414C54.741 76.8235 53.1054 76.8235 52.2816 75.4271C52.0309 74.99 51.6011 74.0551 51.4698 73.3266V73.3144C51.4698 73.2901 51.4579 73.278 51.4579 73.2537C56.1019 71.9181 60.2924 69.5018 63.7545 66.272C63.9933 66.5391 64.2679 66.8063 64.5544 67.037C64.7812 67.3041 64.9961 67.5591 65.0797 67.7169C65.8915 69.1375 65.0797 70.6189 63.7545 72.7073ZM73.8068 63.71C72.9591 64.0621 72.1234 64.6207 71.2997 65.1549C69.2701 66.5027 67.8494 67.3162 66.4646 66.5027C66.2497 66.3813 65.9393 66.1627 65.6289 65.9077C65.3782 65.6163 65.1275 65.3613 64.8887 65.1306C68.2076 61.7066 70.7505 57.4933 72.2189 52.8064C72.8159 52.9643 73.6635 53.2678 73.9739 53.4499C75.3827 54.2877 75.3827 55.9755 75.2155 58.4646C75.1439 59.4239 75.0842 60.4195 75.1797 61.318C75.2513 62.0101 75.4543 62.6658 75.6453 63.1758C75.1319 63.2608 74.5111 63.4186 73.8068 63.71ZM79.5253 45.4119C78.9642 46.1525 78.5105 47.0632 78.0688 47.9496C76.9824 50.1351 76.1467 51.58 74.5589 51.58H74.547C74.1172 51.58 73.3053 51.4829 72.6607 51.3008C73.3173 48.7752 73.6635 46.1282 73.6635 43.3963C73.6635 41.1136 73.4128 38.8915 72.9591 36.7545C73.5202 36.6088 74.2485 36.4631 74.6186 36.4631C76.2542 36.4753 77.0779 37.9323 78.1524 40.1665C78.5702 41.0286 79 41.9271 79.5253 42.6556C79.9312 43.2141 80.4207 43.6755 80.8386 44.0277C80.4565 44.3434 79.9909 44.7926 79.5253 45.4119Z"
            fill="#CFB691"
            fillOpacity="0.6"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_3771_6650"
            x="0"
            y="0"
            width="86"
            height="87"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1.5"
              result="effect1_foregroundBlur_3771_6650"
            />
          </filter>
          <clipPath id="clip0_3771_6650">
            <rect
              width="80"
              height="81"
              fill="white"
              transform="translate(3 3)"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default Circles;
