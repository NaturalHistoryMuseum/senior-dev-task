interface IFamilyIcon {
  className?: string;
  fill?: string;
  width?: string;
  height?: string;
}

const FamilyIcon = ({
  className,
  width = "32px",
  height = "34px",
  fill = "currentColor",
}: IFamilyIcon) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 33 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.9292 24.0286C12.7161 24.8903 13.6618 26.6375 15.6155 28.0687C16.0165 28.3619 16.149 28.5971 16.1408 29.0015C16.1166 30.1794 16.1255 31.3737 16.133 32.5296L16.1371 33.1149C16.1386 33.3575 16.3041 33.5688 16.54 33.6276C17.5193 33.8754 18.7128 34 20.0868 34C20.7628 34 21.4597 33.9695 22.1576 33.9085C22.4274 33.885 22.6361 33.664 22.6443 33.3936C22.6792 32.2112 22.6997 31.1761 22.7071 30.2289C22.7075 30.1351 22.7023 30.0231 22.696 29.8992C22.6859 29.7084 22.6558 29.1298 22.7652 29.0275C23.9807 28.5119 25.1028 27.7484 26.1003 26.7573C26.4533 26.406 26.6676 25.9733 26.722 25.5053L26.7339 25.4201C26.77 25.1708 26.8544 24.5886 26.309 24.2846C25.9511 24.0878 25.5333 24.0956 25.0526 24.317C23.5409 25.0105 21.7577 25.72 20.0012 25.72C19.3925 25.72 18.8095 25.6325 18.2686 25.4607C17.7414 25.2921 17.0825 25.0473 16.6654 24.6366C15.6188 23.6056 14.8215 22.8756 14.0889 22.8756C13.6901 22.8756 13.1648 23.0754 12.9292 24.0286ZM13.9662 24.2753C14.0357 23.9948 14.112 23.9323 14.1127 23.9315C14.4409 23.9412 15.4759 24.9614 15.9176 25.3967C16.4957 25.9655 17.305 26.2725 17.9449 26.476C18.59 26.6817 19.2824 26.7863 20.0008 26.7863C21.9623 26.7863 23.881 26.028 25.4975 25.2862C25.5801 25.2475 25.6419 25.2285 25.6854 25.2192C25.6825 25.2363 25.6802 25.2527 25.678 25.2679L25.6624 25.384C25.6359 25.6132 25.5303 25.8215 25.3484 26.0027C24.448 26.8972 23.4375 27.5854 22.347 28.0494C21.5486 28.3883 21.6003 29.3698 21.6308 29.9558C21.6364 30.0551 21.6412 30.1459 21.6405 30.2214C21.6349 31.0314 21.6189 31.9061 21.5921 32.8838C21.0835 32.9181 20.5786 32.9356 20.086 32.9356C18.9855 32.9356 18.0163 32.8515 17.1997 32.6863L17.1982 32.523C17.1904 31.3741 17.1818 30.1872 17.2052 29.0234C17.2257 28.0546 16.7022 27.5449 16.2446 27.21C14.4048 25.861 13.9345 24.5309 13.9662 24.2753ZM0.762019 14.6533C0.834941 15.7214 1.01687 16.6813 1.31935 17.5877C1.83911 19.1417 2.79268 20.5622 4.32144 22.059C4.54988 22.283 4.62281 22.4839 4.6083 22.8529C4.57258 23.83 4.52868 25.1169 4.50635 26.4213C4.50412 26.5537 4.55137 26.6828 4.6388 26.7822C5.6839 27.9709 8.84225 30.749 11.1542 31.822C11.2256 31.8555 11.3019 31.8719 11.3789 31.8719C11.4715 31.8719 11.5638 31.848 11.6464 31.8004C11.7967 31.713 11.8949 31.5578 11.9098 31.3845C12.0415 29.8382 12.1427 28.2261 12.2093 26.5921C12.2454 25.7107 12.2927 24.8293 12.3407 23.9483L12.4006 22.8262C12.4288 22.8079 12.4683 22.7852 12.498 22.7689C12.5602 22.7331 12.6219 22.6974 12.6807 22.6569C13.0639 22.3938 13.3831 22.0601 13.692 21.7375C13.7779 21.6479 13.8631 21.5593 13.9479 21.4737C14.394 21.0243 14.7888 20.6017 15.1552 20.1809C15.3695 19.9353 15.5786 19.6849 15.7803 19.4293C16.4102 18.6324 16.8492 17.9099 17.1226 17.2182C17.2733 16.8328 17.4612 16.3558 17.411 15.842C17.3451 15.1619 16.9761 14.6555 16.3715 14.4167C15.7926 14.1864 15.2237 14.3326 14.6861 14.8642C14.5346 15.0134 14.4011 15.1697 14.272 15.3207L14.1261 15.4904C13.9974 15.6366 13.8702 15.7918 13.7429 15.9439C13.7615 15.6005 13.7723 15.2341 13.7664 14.8657C13.7545 14.1596 13.7407 13.946 13.4721 13.257C13.209 12.5806 12.5881 11.995 12.0263 11.4994L11.9299 11.4142C11.3889 10.9376 10.8491 10.461 10.3119 9.98105C9.29467 9.07324 8.43523 8.08879 7.68442 6.97114C7.36037 6.48971 7.00729 5.96474 6.96413 5.4688C6.93809 5.16223 7.14718 4.62052 7.33656 4.50369C7.45822 4.42817 7.78116 4.22986 8.54982 4.80171C8.69231 4.90774 8.82923 5.04838 8.97359 5.1972L9.07702 5.30249C9.24481 5.47326 9.41037 5.64887 9.57631 5.82448C9.89107 6.15784 10.2166 6.50236 10.5637 6.82493C11.0753 7.30078 11.6155 7.73236 12.1796 8.12153C12.1941 8.13232 12.209 8.14237 12.2246 8.15129C13.0818 8.73728 13.9933 9.22392 14.9558 9.60155C17.1479 10.4606 19.4736 10.8457 21.7227 11.2185C22.5918 11.3625 23.4907 11.5113 24.362 11.685C25.6929 11.9496 29.0112 12.2874 30.5173 12.3469C30.9072 12.3622 31.1732 12.7194 31.1769 13.0438C31.1829 13.494 30.7093 13.7935 29.9116 13.8448C27.6294 13.9918 25.5656 14.039 23.907 14.077C23.3735 14.0892 22.8735 14.1004 22.4088 14.1145C21.7 14.1354 21.2282 14.51 21.0456 15.198C20.5552 17.0415 20.3788 18.8396 20.3 19.8512C20.2025 19.8449 20.1035 19.8408 20.0008 19.8408C18.5033 19.8408 17.2841 21.0809 17.2841 22.6055C17.2841 24.0651 18.4352 25.2523 19.961 25.3684C20.0366 25.3736 20.1106 25.3762 20.1846 25.3762C20.918 25.3762 21.5936 25.0853 22.0869 24.5588C22.626 23.9832 22.9162 23.1569 22.863 22.3496C22.7894 21.2323 22.2536 20.451 21.3514 20.0819C21.4221 19.1384 21.5832 17.3194 22.075 15.4718C22.1353 15.2441 22.2071 15.1864 22.4396 15.1794C22.9017 15.1656 23.3995 15.1544 23.9308 15.1422C25.5987 15.1038 27.6752 15.0562 29.9793 14.9081C31.6654 14.7995 32.2518 13.8288 32.2421 13.03C32.2306 12.1017 31.4746 11.3178 30.5582 11.2817C28.9833 11.22 25.7368 10.8721 24.5689 10.64C23.6808 10.4629 22.7734 10.3125 21.8957 10.1674C20.1605 9.87985 18.3791 9.58072 16.6773 9.06543C16.9749 8.39462 17.1866 7.89942 17.3392 7.52848C18.0174 8.2644 18.9866 8.72872 20.0645 8.72872C22.0058 8.72872 23.5305 7.22674 23.7735 5.07591C23.8888 4.05574 23.5666 3.03557 22.8887 2.27733C22.2302 1.54067 21.2926 1.11765 20.316 1.11765C18.4911 1.11765 16.8112 2.55451 16.4325 4.28865C14.5313 4.61047 13.9085 4.5569 13.7057 4.49216C13.3731 4.3865 13.0197 4.2001 12.709 3.96794C12.6833 3.94896 12.6454 3.91771 12.5974 3.87902C11.8897 3.30866 11.1486 2.77253 10.5459 3.03371C10.377 3.10664 10.0886 3.3042 10.0499 3.8087C9.97999 4.71874 10.9012 5.81183 11.8317 6.34275C11.9433 6.40562 12.1133 6.53808 12.1163 6.75201C11.8324 6.5284 11.5564 6.29438 11.2889 6.04585C10.9667 5.74635 10.6675 5.42899 10.3506 5.0934C10.1802 4.91295 10.0098 4.73288 9.83638 4.55541L9.73704 4.45458C9.56961 4.28232 9.39624 4.10411 9.18528 3.9471C8.28938 3.28113 7.47905 3.16356 6.77662 3.59737C6.13111 3.99547 5.85318 4.99331 5.90155 5.56069C5.96777 6.33233 6.4228 7.00686 6.78778 7.54894C7.60034 8.75811 8.51633 9.80842 9.60124 10.7765C10.1396 11.2576 10.682 11.7356 11.2241 12.2137L11.3201 12.2982C11.6576 12.5958 12.2863 13.1509 12.4776 13.6432C12.6878 14.1823 12.6893 14.2623 12.6989 14.8821C12.7153 15.9052 12.5981 16.9314 12.5319 17.3544C11.9563 17.9724 11.3283 18.5163 10.5701 18.8195C10.1813 18.9747 9.74559 19.0748 9.37391 19.0934C9.03535 19.1108 8.66887 19.1019 8.40732 19.0561C6.83094 18.7812 5.67497 17.8366 4.54207 15.8971C4.33484 15.5425 4.13914 15.166 3.94902 14.8017C3.76299 14.4453 3.57176 14.0759 3.36415 13.7168C3.19301 13.4222 2.87602 12.8745 2.26176 12.8745C1.96858 12.8745 1.68136 12.9991 1.34019 13.1867C1.26429 13.2279 1.2003 13.2878 1.1523 13.36C0.860241 13.8039 0.732255 14.2269 0.762019 14.6533ZM17.4181 5.01489C17.4181 3.55831 18.8263 2.18171 20.3163 2.18171C21.0002 2.18171 21.6312 2.46708 22.0944 2.98535C22.5699 3.51775 22.7964 4.23544 22.7146 4.95462C22.5356 6.54886 21.4459 7.66167 20.0652 7.66167C18.6056 7.66167 17.4184 6.47445 17.4181 5.01489ZM21.7997 22.4188C21.8339 22.9381 21.6505 23.4653 21.309 23.83C21.0869 24.0673 20.6661 24.3527 20.0414 24.3043C19.0614 24.2299 18.35 23.5148 18.35 22.6044C18.35 21.6676 19.0904 20.906 20.0012 20.906C21.7004 20.9056 21.7752 22.0452 21.7997 22.4188ZM11.1754 4.15954C11.3387 4.25702 11.5787 4.4237 11.9299 4.70721C11.9906 4.75594 12.0389 4.79501 12.0717 4.81957C12.4817 5.12614 12.9345 5.36351 13.3843 5.50637C13.8914 5.66822 14.8267 5.62878 16.3715 5.37764C16.4068 5.74263 16.4965 6.09198 16.6304 6.41827C16.505 6.78289 16.0909 7.75803 15.6627 8.72388C15.557 8.68482 15.4495 8.64947 15.3446 8.60817C14.551 8.29714 13.7946 7.90425 13.0784 7.43881C13.0937 7.35659 13.1134 7.25465 13.1398 7.1222L13.1581 7.03104C13.3035 6.2568 12.8418 5.68831 12.3607 5.41411C11.7714 5.07926 11.3305 4.53383 11.1754 4.15954ZM1.82497 14.5789C1.81418 14.4211 1.86255 14.2533 1.97603 14.0561C2.12001 13.9825 2.19554 13.9549 2.23535 13.9449C2.2666 13.9773 2.33171 14.0576 2.44332 14.25C2.63828 14.5882 2.82505 14.9461 3.00549 15.2928C3.20119 15.6682 3.40359 16.0567 3.62385 16.4336C4.49222 17.921 5.80072 19.6819 8.2265 20.1046C8.46611 20.1463 8.73138 20.1671 9.03535 20.1671C9.16854 20.1671 9.30025 20.1626 9.42823 20.1567C9.92083 20.1321 10.4677 20.0082 10.9674 19.8077C11.9571 19.4118 12.7172 18.7347 13.398 17.9869C13.407 17.9791 13.4155 17.9679 13.4237 17.9586C13.718 17.6345 13.9985 17.2989 14.2742 16.9645C14.4915 16.7018 14.7069 16.4406 14.9264 16.1917L15.0816 16.0116C15.2025 15.8714 15.3156 15.7382 15.4358 15.6195C15.601 15.4558 15.7345 15.3754 15.8443 15.3754C15.8852 15.3754 15.9291 15.3851 15.9797 15.4052C16.1218 15.4614 16.3145 15.5786 16.3499 15.9424C16.3756 16.2021 16.2453 16.5329 16.1311 16.8246C15.8971 17.4165 15.5087 18.052 14.945 18.7652C14.7534 19.0067 14.5555 19.2448 14.352 19.4781C14.0004 19.881 13.6213 20.2869 13.1919 20.72C13.1022 20.8093 13.013 20.903 12.9218 20.9975C12.6506 21.2814 12.3701 21.5742 12.0787 21.774C12.0449 21.7978 12.0062 21.8183 11.9686 21.841C11.7577 21.9615 11.3648 22.1862 11.3387 22.7168L11.2762 23.8884C11.2286 24.7742 11.1806 25.6601 11.1445 26.5463C11.0898 27.8853 11.0117 29.2102 10.9127 30.4945C8.94754 29.3769 6.54892 27.2766 5.576 26.2275C5.59907 25.0049 5.63962 23.8091 5.67385 22.8913C5.69952 22.2242 5.51201 21.7316 5.06741 21.2952C3.66403 19.9215 2.79454 18.6357 2.33096 17.2487C2.05751 16.4295 1.89157 15.5566 1.82497 14.5789ZM6.14487 15.6489C6.14487 17.3272 7.46603 18.693 9.08967 18.693C10.5942 18.693 11.7755 17.4999 12.0296 15.7244C12.1316 15.0112 11.9035 14.2902 11.3863 13.6941C10.8037 13.0215 9.93683 12.6044 9.12576 12.6044L9.0785 12.6048C7.32391 12.639 6.14487 13.8623 6.14487 15.6489ZM7.2108 15.6489C7.2108 14.7109 7.70712 13.6979 9.10046 13.6703H9.1012C9.62245 13.6703 10.2073 13.9605 10.582 14.3925C10.8018 14.6462 11.0485 15.057 10.9752 15.5734C10.829 16.5954 10.1891 17.6271 9.09004 17.6271C8.05387 17.6271 7.2108 16.7394 7.2108 15.6489ZM15.7222 3.3254C16.101 2.92061 16.3045 2.34133 16.2662 1.77581C16.1933 0.664114 15.4406 0 14.2534 0C13.1941 0 12.3325 0.875439 12.3325 1.95104C12.3325 2.982 13.1409 3.81986 14.2136 3.90097C14.2664 3.90543 14.3185 3.90729 14.3702 3.90729C14.8918 3.90729 15.3718 3.70043 15.7222 3.3254ZM15.2032 1.8465C15.2215 2.11921 15.1225 2.40718 14.9443 2.59767C14.7761 2.777 14.5566 2.85773 14.2943 2.83839C13.8493 2.8049 13.3984 2.48903 13.3984 1.95104C13.3984 1.46291 13.782 1.06593 14.2534 1.06593C15.0444 1.06556 15.1776 1.46031 15.2032 1.8465Z"
      fill={fill}
    />
  </svg>
);

export default FamilyIcon;