import React,{Component, useState} from 'react';
import { Modal, StatusBar, Keyboard, ActivityIndicator, View, Text, ImageBackground, StyleSheet, AsyncStorage, Platform, FlatList, ScrollView, TouchableOpacity, Linking, SafeAreaView, TextInput, Image, Dimensions } from 'react-native'
import { SvgXml } from 'react-native-svg';
import SignInBtn from '../components/SignInBtnUI';
import KeyboardManager from 'react-native-keyboard-manager';
const userXML = `<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.8223 1.74859C9.45428 1.37374 9.01487 1.07644 8.53003 0.874263C8.04519 0.672082 7.52475 0.569117 6.99944 0.57145C5.93858 0.57145 4.92116 0.992877 4.17101 1.74302C3.42087 2.49317 2.99944 3.51058 2.99944 4.57145V6.28574M2.42801 6.28574H11.5709C12.2021 6.28574 12.7137 6.79741 12.7137 7.42859V14.2857C12.7137 14.9169 12.2021 15.4286 11.5709 15.4286H2.42801C1.79683 15.4286 1.28516 14.9169 1.28516 14.2857V7.42859C1.28516 6.79741 1.79683 6.28574 2.42801 6.28574ZM7.57087 10.8572C7.57087 11.1728 7.31503 11.4286 6.99944 11.4286C6.68385 11.4286 6.42801 11.1728 6.42801 10.8572C6.42801 10.5416 6.68385 10.2857 6.99944 10.2857C7.31503 10.2857 7.57087 10.5416 7.57087 10.8572Z" stroke="#969696" stroke-width="1.14286" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

// const TickXML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
// <g clip-path="url(#clip0_198_6479)">
// <path fill-rule="evenodd" clip-rule="evenodd" d="M1.63569 8.4544C1.37534 8.71475 1.37534 9.13686 1.63569 9.39721L4.92063 12.6821C4.92535 12.6872 4.93016 12.6921 4.93507 12.697C5.06322 12.8252 5.23056 12.8903 5.39851 12.8922C5.57192 12.8944 5.74602 12.8294 5.87833 12.697C5.8833 12.6921 5.88817 12.687 5.89295 12.682L14.3632 4.21175C14.6235 3.9514 14.6235 3.52929 14.3632 3.26894C14.1028 3.00859 13.6807 3.00859 13.4203 3.26894L5.4067 11.2826L2.5785 8.4544C2.31815 8.19405 1.89604 8.19405 1.63569 8.4544Z" fill="#969696"/>
// </g>
// <defs>
// <clipPath id="clip0_198_6479">
// <rect width="16" height="16" fill="white"/>
// </clipPath>
// </defs>
// </svg>`;

const logoXML = `<svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.0562 4.37136C22.1362 3.43423 21.0377 2.69099 19.8256 2.18554C18.6135 1.68008 17.3124 1.42267 15.9991 1.4285C13.3469 1.4285 10.8034 2.48207 8.92803 4.35743C7.05266 6.2328 5.99909 8.77634 5.99909 11.4285V15.7142M4.57052 15.7142H27.4277C29.0056 15.7142 30.2848 16.9934 30.2848 18.5714V35.7142C30.2848 37.2922 29.0056 38.5714 27.4277 38.5714H4.57052C2.99257 38.5714 1.71338 37.2922 1.71338 35.7142V18.5714C1.71338 16.9934 2.99257 15.7142 4.57052 15.7142ZM17.4277 27.1428C17.4277 27.9318 16.7881 28.5714 15.9991 28.5714C15.2101 28.5714 14.5705 27.9318 14.5705 27.1428C14.5705 26.3538 15.2101 25.7142 15.9991 25.7142C16.7881 25.7142 17.4277 26.3538 17.4277 27.1428Z" stroke="white" stroke-width="2.85714" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const intersectImage = `<svg width="96" height="220" viewBox="0 0 96 220" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M96 55.7572V218.579C81.6108 227.036 74.0181 179.174 65.0293 122.512C60.3952 93.2994 55.39 61.748 48.8911 34.3687C67.4237 44.9196 83.091 51.3263 96 55.7572ZM38.849 0C39.6032 1.95213 40.3208 3.95177 41 5.99997C43.8732 14.6637 46.4845 24.2302 48.8911 34.3687C39.3572 28.9409 29.065 22.4164 18 14.5C11.2474 9.6689 5.32747 4.83058 0.174251 0L38.849 0Z" fill="url(#paint0_linear_84_6358)"/>
<defs>
<linearGradient id="paint0_linear_84_6358" x1="48.0871" y1="0" x2="48.0871" y2="219.553" gradientUnits="userSpaceOnUse">
<stop stop-color="#7878E7"/>
<stop offset="1" stop-color="#1982B3"/>
</linearGradient>
</defs>
</svg>`;

const nextBtnXML = `<svg width="160" height="36" viewBox="0 0 160 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="160" height="36" rx="18" fill="url(#paint0_linear_79_5243)"/>
<path d="M23.8323 13.596C23.6091 13.3728 23.2473 13.3728 23.0241 13.596C22.801 13.8191 22.801 14.1809 23.0241 14.4041L26.0486 17.4286H12.5714C12.2558 17.4286 12 17.6844 12 18C12 18.3156 12.2558 18.5714 12.5714 18.5714H26.0486L23.0241 21.596C22.801 21.8191 22.801 22.1809 23.0241 22.4041C23.2473 22.6272 23.6091 22.6272 23.8323 22.4041L27.8201 18.4162C27.9309 18.312 28 18.1641 28 18C28 17.836 27.9309 17.688 27.8201 17.5838L23.8323 13.596Z" fill="white"/>
<path d="M42.2407 23L40.0007 19.108H38.7827V23H37.1867V13.27H40.5467C41.2934 13.27 41.9234 13.4007 42.4367 13.662C42.9594 13.9233 43.3467 14.2733 43.5987 14.712C43.8601 15.1507 43.9907 15.6407 43.9907 16.182C43.9907 16.8167 43.8041 17.3953 43.4307 17.918C43.0667 18.4313 42.5021 18.7813 41.7367 18.968L44.1447 23H42.2407ZM38.7827 17.834H40.5467C41.1441 17.834 41.5921 17.6847 41.8907 17.386C42.1987 17.0873 42.3527 16.686 42.3527 16.182C42.3527 15.678 42.2034 15.286 41.9047 15.006C41.6061 14.7167 41.1534 14.572 40.5467 14.572H38.7827V17.834ZM53.1024 18.954C53.1024 19.2433 53.0838 19.5047 53.0464 19.738H47.1524C47.1991 20.354 47.4278 20.8487 47.8384 21.222C48.2491 21.5953 48.7531 21.782 49.3504 21.782C50.2091 21.782 50.8158 21.4227 51.1704 20.704H52.8924C52.6591 21.4133 52.2344 21.9967 51.6184 22.454C51.0118 22.902 50.2558 23.126 49.3504 23.126C48.6131 23.126 47.9504 22.9627 47.3624 22.636C46.7838 22.3 46.3264 21.8333 45.9904 21.236C45.6638 20.6293 45.5004 19.9293 45.5004 19.136C45.5004 18.3427 45.6591 17.6473 45.9764 17.05C46.3031 16.4433 46.7558 15.9767 47.3344 15.65C47.9224 15.3233 48.5944 15.16 49.3504 15.16C50.0784 15.16 50.7271 15.3187 51.2964 15.636C51.8658 15.9533 52.3091 16.4013 52.6264 16.98C52.9438 17.5493 53.1024 18.2073 53.1024 18.954ZM51.4364 18.45C51.4271 17.862 51.2171 17.3907 50.8064 17.036C50.3958 16.6813 49.8871 16.504 49.2804 16.504C48.7298 16.504 48.2584 16.6813 47.8664 17.036C47.4744 17.3813 47.2411 17.8527 47.1664 18.45H51.4364ZM57.473 23.126C56.8664 23.126 56.3204 23.0187 55.835 22.804C55.359 22.58 54.981 22.2813 54.701 21.908C54.421 21.5253 54.2717 21.1007 54.253 20.634H55.905C55.933 20.9607 56.087 21.236 56.367 21.46C56.6564 21.6747 57.0157 21.782 57.445 21.782C57.893 21.782 58.2384 21.698 58.481 21.53C58.733 21.3527 58.859 21.1287 58.859 20.858C58.859 20.5687 58.719 20.354 58.439 20.214C58.1684 20.074 57.7344 19.92 57.137 19.752C56.5584 19.5933 56.087 19.4393 55.723 19.29C55.359 19.1407 55.0417 18.912 54.771 18.604C54.5097 18.296 54.379 17.89 54.379 17.386C54.379 16.9753 54.5004 16.602 54.743 16.266C54.9857 15.9207 55.331 15.65 55.779 15.454C56.2364 15.258 56.759 15.16 57.347 15.16C58.2244 15.16 58.929 15.384 59.461 15.832C60.0024 16.2707 60.2917 16.8727 60.329 17.638H58.733C58.705 17.2927 58.565 17.0173 58.313 16.812C58.061 16.6067 57.7204 16.504 57.291 16.504C56.871 16.504 56.549 16.5833 56.325 16.742C56.101 16.9007 55.989 17.1107 55.989 17.372C55.989 17.5773 56.0637 17.75 56.213 17.89C56.3624 18.03 56.5444 18.142 56.759 18.226C56.9737 18.3007 57.291 18.3987 57.711 18.52C58.271 18.6693 58.7284 18.8233 59.083 18.982C59.447 19.1313 59.7597 19.3553 60.021 19.654C60.2824 19.9527 60.4177 20.3493 60.427 20.844C60.427 21.2827 60.3057 21.6747 60.063 22.02C59.8204 22.3653 59.475 22.636 59.027 22.832C58.5884 23.028 58.0704 23.126 57.473 23.126ZM69.2216 18.954C69.2216 19.2433 69.2029 19.5047 69.1656 19.738H63.2716C63.3182 20.354 63.5469 20.8487 63.9576 21.222C64.3682 21.5953 64.8722 21.782 65.4696 21.782C66.3282 21.782 66.9349 21.4227 67.2896 20.704H69.0116C68.7782 21.4133 68.3536 21.9967 67.7376 22.454C67.1309 22.902 66.3749 23.126 65.4696 23.126C64.7322 23.126 64.0696 22.9627 63.4816 22.636C62.9029 22.3 62.4456 21.8333 62.1096 21.236C61.7829 20.6293 61.6196 19.9293 61.6196 19.136C61.6196 18.3427 61.7782 17.6473 62.0956 17.05C62.4222 16.4433 62.8749 15.9767 63.4536 15.65C64.0416 15.3233 64.7136 15.16 65.4696 15.16C66.1976 15.16 66.8462 15.3187 67.4156 15.636C67.9849 15.9533 68.4282 16.4013 68.7456 16.98C69.0629 17.5493 69.2216 18.2073 69.2216 18.954ZM67.5556 18.45C67.5462 17.862 67.3362 17.3907 66.9256 17.036C66.5149 16.6813 66.0062 16.504 65.3996 16.504C64.8489 16.504 64.3776 16.6813 63.9856 17.036C63.5936 17.3813 63.3602 17.8527 63.2856 18.45H67.5556ZM72.6542 16.588V20.858C72.6542 21.1473 72.7195 21.3573 72.8502 21.488C72.9902 21.6093 73.2235 21.67 73.5502 21.67H74.5302V23H73.2702C72.5515 23 72.0009 22.832 71.6182 22.496C71.2355 22.16 71.0442 21.614 71.0442 20.858V16.588H70.1342V15.286H71.0442V13.368H72.6542V15.286H74.5302V16.588H72.6542ZM81.2339 16.42C81.5046 16.0653 81.8732 15.7667 82.3399 15.524C82.8066 15.2813 83.3339 15.16 83.9219 15.16C84.5939 15.16 85.2052 15.328 85.7559 15.664C86.3159 15.9907 86.7546 16.4527 87.0719 17.05C87.3892 17.6473 87.5479 18.3333 87.5479 19.108C87.5479 19.8827 87.3892 20.578 87.0719 21.194C86.7546 21.8007 86.3159 22.2767 85.7559 22.622C85.2052 22.958 84.5939 23.126 83.9219 23.126C83.3339 23.126 82.8112 23.0093 82.3539 22.776C81.8966 22.5333 81.5232 22.2347 81.2339 21.88V26.668H79.6379V15.286H81.2339V16.42ZM85.9239 19.108C85.9239 18.576 85.8119 18.1187 85.5879 17.736C85.3732 17.344 85.0839 17.05 84.7199 16.854C84.3652 16.6487 83.9826 16.546 83.5719 16.546C83.1706 16.546 82.7879 16.6487 82.4239 16.854C82.0692 17.0593 81.7799 17.358 81.5559 17.75C81.3412 18.142 81.2339 18.604 81.2339 19.136C81.2339 19.668 81.3412 20.1347 81.5559 20.536C81.7799 20.928 82.0692 21.2267 82.4239 21.432C82.7879 21.6373 83.1706 21.74 83.5719 21.74C83.9826 21.74 84.3652 21.6373 84.7199 21.432C85.0839 21.2173 85.3732 20.9093 85.5879 20.508C85.8119 20.1067 85.9239 19.64 85.9239 19.108ZM88.5942 19.108C88.5942 18.3333 88.7528 17.6473 89.0702 17.05C89.3968 16.4527 89.8355 15.9907 90.3862 15.664C90.9462 15.328 91.5622 15.16 92.2342 15.16C92.8408 15.16 93.3682 15.2813 93.8162 15.524C94.2735 15.7573 94.6375 16.0513 94.9082 16.406V15.286H96.5182V23H94.9082V21.852C94.6375 22.216 94.2688 22.5193 93.8022 22.762C93.3355 23.0047 92.8035 23.126 92.2062 23.126C91.5435 23.126 90.9368 22.958 90.3862 22.622C89.8355 22.2767 89.3968 21.8007 89.0702 21.194C88.7528 20.578 88.5942 19.8827 88.5942 19.108ZM94.9082 19.136C94.9082 18.604 94.7962 18.142 94.5722 17.75C94.3575 17.358 94.0728 17.0593 93.7182 16.854C93.3635 16.6487 92.9808 16.546 92.5702 16.546C92.1595 16.546 91.7768 16.6487 91.4222 16.854C91.0675 17.05 90.7782 17.344 90.5542 17.736C90.3395 18.1187 90.2322 18.576 90.2322 19.108C90.2322 19.64 90.3395 20.1067 90.5542 20.508C90.7782 20.9093 91.0675 21.2173 91.4222 21.432C91.7862 21.6373 92.1688 21.74 92.5702 21.74C92.9808 21.74 93.3635 21.6373 93.7182 21.432C94.0728 21.2267 94.3575 20.928 94.5722 20.536C94.7962 20.1347 94.9082 19.668 94.9082 19.136ZM101.414 23.126C100.808 23.126 100.262 23.0187 99.7765 22.804C99.3005 22.58 98.9225 22.2813 98.6425 21.908C98.3625 21.5253 98.2131 21.1007 98.1945 20.634H99.8465C99.8745 20.9607 100.028 21.236 100.308 21.46C100.598 21.6747 100.957 21.782 101.386 21.782C101.834 21.782 102.18 21.698 102.422 21.53C102.674 21.3527 102.8 21.1287 102.8 20.858C102.8 20.5687 102.66 20.354 102.38 20.214C102.11 20.074 101.676 19.92 101.078 19.752C100.5 19.5933 100.028 19.4393 99.6645 19.29C99.3005 19.1407 98.9831 18.912 98.7125 18.604C98.4511 18.296 98.3205 17.89 98.3205 17.386C98.3205 16.9753 98.4418 16.602 98.6845 16.266C98.9271 15.9207 99.2725 15.65 99.7205 15.454C100.178 15.258 100.7 15.16 101.288 15.16C102.166 15.16 102.87 15.384 103.402 15.832C103.944 16.2707 104.233 16.8727 104.27 17.638H102.674C102.646 17.2927 102.506 17.0173 102.254 16.812C102.002 16.6067 101.662 16.504 101.232 16.504C100.812 16.504 100.49 16.5833 100.266 16.742C100.042 16.9007 99.9305 17.1107 99.9305 17.372C99.9305 17.5773 100.005 17.75 100.154 17.89C100.304 18.03 100.486 18.142 100.7 18.226C100.915 18.3007 101.232 18.3987 101.652 18.52C102.212 18.6693 102.67 18.8233 103.024 18.982C103.388 19.1313 103.701 19.3553 103.962 19.654C104.224 19.9527 104.359 20.3493 104.368 20.844C104.368 21.2827 104.247 21.6747 104.004 22.02C103.762 22.3653 103.416 22.636 102.968 22.832C102.53 23.028 102.012 23.126 101.414 23.126ZM108.893 23.126C108.286 23.126 107.74 23.0187 107.255 22.804C106.779 22.58 106.401 22.2813 106.121 21.908C105.841 21.5253 105.692 21.1007 105.673 20.634H107.325C107.353 20.9607 107.507 21.236 107.787 21.46C108.076 21.6747 108.436 21.782 108.865 21.782C109.313 21.782 109.658 21.698 109.901 21.53C110.153 21.3527 110.279 21.1287 110.279 20.858C110.279 20.5687 110.139 20.354 109.859 20.214C109.588 20.074 109.154 19.92 108.557 19.752C107.978 19.5933 107.507 19.4393 107.143 19.29C106.779 19.1407 106.462 18.912 106.191 18.604C105.93 18.296 105.799 17.89 105.799 17.386C105.799 16.9753 105.92 16.602 106.163 16.266C106.406 15.9207 106.751 15.65 107.199 15.454C107.656 15.258 108.179 15.16 108.767 15.16C109.644 15.16 110.349 15.384 110.881 15.832C111.422 16.2707 111.712 16.8727 111.749 17.638H110.153C110.125 17.2927 109.985 17.0173 109.733 16.812C109.481 16.6067 109.14 16.504 108.711 16.504C108.291 16.504 107.969 16.5833 107.745 16.742C107.521 16.9007 107.409 17.1107 107.409 17.372C107.409 17.5773 107.484 17.75 107.633 17.89C107.782 18.03 107.964 18.142 108.179 18.226C108.394 18.3007 108.711 18.3987 109.131 18.52C109.691 18.6693 110.148 18.8233 110.503 18.982C110.867 19.1313 111.18 19.3553 111.441 19.654C111.702 19.9527 111.838 20.3493 111.847 20.844C111.847 21.2827 111.726 21.6747 111.483 22.02C111.24 22.3653 110.895 22.636 110.447 22.832C110.008 23.028 109.49 23.126 108.893 23.126ZM123.931 15.286L121.537 23H119.857L118.303 17.302L116.749 23H115.069L112.661 15.286H114.285L115.895 21.488L117.533 15.286H119.199L120.767 21.46L122.363 15.286H123.931ZM128.47 23.126C127.742 23.126 127.084 22.9627 126.496 22.636C125.908 22.3 125.446 21.8333 125.11 21.236C124.774 20.6293 124.606 19.9293 124.606 19.136C124.606 18.352 124.779 17.6567 125.124 17.05C125.47 16.4433 125.941 15.9767 126.538 15.65C127.136 15.3233 127.803 15.16 128.54 15.16C129.278 15.16 129.945 15.3233 130.542 15.65C131.14 15.9767 131.611 16.4433 131.956 17.05C132.302 17.6567 132.474 18.352 132.474 19.136C132.474 19.92 132.297 20.6153 131.942 21.222C131.588 21.8287 131.102 22.3 130.486 22.636C129.88 22.9627 129.208 23.126 128.47 23.126ZM128.47 21.74C128.881 21.74 129.264 21.642 129.618 21.446C129.982 21.25 130.276 20.956 130.5 20.564C130.724 20.172 130.836 19.696 130.836 19.136C130.836 18.576 130.729 18.1047 130.514 17.722C130.3 17.33 130.015 17.036 129.66 16.84C129.306 16.644 128.923 16.546 128.512 16.546C128.102 16.546 127.719 16.644 127.364 16.84C127.019 17.036 126.744 17.33 126.538 17.722C126.333 18.1047 126.23 18.576 126.23 19.136C126.23 19.9667 126.44 20.6107 126.86 21.068C127.29 21.516 127.826 21.74 128.47 21.74ZM135.648 16.406C135.881 16.014 136.189 15.7107 136.572 15.496C136.964 15.272 137.426 15.16 137.958 15.16V16.812H137.552C136.927 16.812 136.451 16.9707 136.124 17.288C135.807 17.6053 135.648 18.156 135.648 18.94V23H134.052V15.286H135.648V16.406ZM138.893 19.108C138.893 18.3333 139.052 17.6473 139.369 17.05C139.696 16.4527 140.134 15.9907 140.685 15.664C141.245 15.328 141.866 15.16 142.547 15.16C143.051 15.16 143.546 15.272 144.031 15.496C144.526 15.7107 144.918 16 145.207 16.364V12.64H146.817V23H145.207V21.838C144.946 22.2113 144.582 22.5193 144.115 22.762C143.658 23.0047 143.13 23.126 142.533 23.126C141.861 23.126 141.245 22.958 140.685 22.622C140.134 22.2767 139.696 21.8007 139.369 21.194C139.052 20.578 138.893 19.8827 138.893 19.108ZM145.207 19.136C145.207 18.604 145.095 18.142 144.871 17.75C144.656 17.358 144.372 17.0593 144.017 16.854C143.662 16.6487 143.28 16.546 142.869 16.546C142.458 16.546 142.076 16.6487 141.721 16.854C141.366 17.05 141.077 17.344 140.853 17.736C140.638 18.1187 140.531 18.576 140.531 19.108C140.531 19.64 140.638 20.1067 140.853 20.508C141.077 20.9093 141.366 21.2173 141.721 21.432C142.085 21.6373 142.468 21.74 142.869 21.74C143.28 21.74 143.662 21.6373 144.017 21.432C144.372 21.2267 144.656 20.928 144.871 20.536C145.095 20.1347 145.207 19.668 145.207 19.136Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_79_5243" x1="80" y1="0" x2="80" y2="36" gradientUnits="userSpaceOnUse">
<stop stop-color="#03BFB5"/>
<stop offset="1" stop-color="#0B7F79"/>
</linearGradient>
</defs>
</svg>`;
const crossXML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM10.8294 9.88561C11.0897 10.146 11.0897 10.5681 10.8294 10.8284C10.569 11.0888 10.1469 11.0888 9.88657 10.8284L8.00061 8.94246L6.11463 10.8284C5.85428 11.0888 5.43217 11.0888 5.17182 10.8284C4.91148 10.5681 4.91148 10.146 5.17182 9.88563L7.0578 7.99965L5.17252 6.11437C4.91217 5.85402 4.91217 5.43191 5.17252 5.17157C5.43287 4.91122 5.85498 4.91122 6.11533 5.17157L8.00061 7.05684L9.88587 5.17159C10.1462 4.91124 10.5683 4.91124 10.8287 5.17159C11.089 5.43194 11.089 5.85405 10.8287 6.1144L8.94342 7.99965L10.8294 9.88561Z" fill="white"/>
</svg>
`;

const BackIconXML = `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.25161 13.6061C6.58634 13.9408 7.12906 13.9408 7.46379 13.6061C7.79853 13.2713 7.79853 12.7286 7.46379 12.3939L2.92703 7.85712L23.1429 7.85712C23.6162 7.85712 24 7.47336 24 6.99997C24 6.52659 23.6162 6.14283 23.1429 6.14283L2.92703 6.14283L7.46379 1.60607C7.79853 1.27133 7.79853 0.728618 7.46379 0.393883C7.12906 0.0591478 6.58634 0.0591478 6.25161 0.393883L0.269794 6.3757C0.103704 6.53202 0 6.75389 0 6.99997C0 7.24606 0.103704 7.46793 0.269794 7.62425L6.25161 13.6061Z" fill="white"/>
</svg>`;

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      email: '',
      emailErrorText: '',
      errEmail: false,
      TextBoxBackgroundColor: 'null',
      TextBoxBorderColor: '#4F4F4F',
      TextBoxPlaceholderColor: '#4F4F4F',
      crossEmailVisible: false,

        confirm_email: '',
        confirm_emailErrorText: '',
        confirm_errEmail: false,
        confirm_crossEmailVisible: false,
        confirm_tickVisible: false,
        confirm_TextBoxBackgroundColor: 'null',
        confirm_TextBoxBorderColor: '#4F4F4F',
        confirm_TextBoxPlaceholderColor: '#4F4F4F',

        TickXML: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_198_6479)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.63569 8.4544C1.37534 8.71475 1.37534 9.13686 1.63569 9.39721L4.92063 12.6821C4.92535 12.6872 4.93016 12.6921 4.93507 12.697C5.06322 12.8252 5.23056 12.8903 5.39851 12.8922C5.57192 12.8944 5.74602 12.8294 5.87833 12.697C5.8833 12.6921 5.88817 12.687 5.89295 12.682L14.3632 4.21175C14.6235 3.9514 14.6235 3.52929 14.3632 3.26894C14.1028 3.00859 13.6807 3.00859 13.4203 3.26894L5.4067 11.2826L2.5785 8.4544C2.31815 8.19405 1.89604 8.19405 1.63569 8.4544Z" fill="#969696"/>
        </g>
        <defs>
        <clipPath id="clip0_198_6479">
        <rect width="16" height="16" fill="white"/>
        </clipPath>
        </defs>
        </svg>`
    

    };
   
  }
  componentDidMount = async () => 
  {

    

    this.focusListener = this.props.navigation.addListener('focus', () => {
      

      this.setState({
        email: '',
        emailErrorText: '',
        errEmail: false,
        crossEmailVisible: false,

        confirm_email: '',
        confirm_emailErrorText: '',
        confirm_errEmail: false,
        confirm_crossEmailVisible: false,
        confirm_tickVisible: false,
    })
     
    });

    if (Platform.OS === 'ios') {
      KeyboardManager.setEnable(true);
    }
    
  }
  typingEmail = (text) =>
  {
    this.setState({email: text, crossEmailVisible: true, errEmail: false})

   
      console.log('heee dlaskdj')
    
  }
  clearEmailText = () =>
  {
    this.setState({email: '', crossEmailVisible: false})
  }

  typingConfirmEmail = (text) =>
  {
    this.setState({confirm_email: text, confirm_crossEmailVisible: true, confirm_errEmail: false})
    if (this.state.email == text)
    {
      this.setState({TickXML: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_198_7292)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.63569 8.4544C1.37534 8.71475 1.37534 9.13686 1.63569 9.39721L4.92063 12.6821C4.92535 12.6872 4.93016 12.6921 4.93507 12.697C5.06322 12.8252 5.23056 12.8903 5.39851 12.8922C5.57192 12.8944 5.74602 12.8294 5.87833 12.697C5.8833 12.6921 5.88817 12.687 5.89295 12.682L14.3632 4.21175C14.6235 3.9514 14.6235 3.52929 14.3632 3.26894C14.1028 3.00859 13.6807 3.00859 13.4203 3.26894L5.4067 11.2826L2.5785 8.4544C2.31815 8.19405 1.89604 8.19405 1.63569 8.4544Z" fill="#008533"/>
      </g>
      <defs>
      <clipPath id="clip0_198_7292">
      <rect width="16" height="16" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      `})
    }
    else{
      this.setState({TickXML: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_198_6479)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.63569 8.4544C1.37534 8.71475 1.37534 9.13686 1.63569 9.39721L4.92063 12.6821C4.92535 12.6872 4.93016 12.6921 4.93507 12.697C5.06322 12.8252 5.23056 12.8903 5.39851 12.8922C5.57192 12.8944 5.74602 12.8294 5.87833 12.697C5.8833 12.6921 5.88817 12.687 5.89295 12.682L14.3632 4.21175C14.6235 3.9514 14.6235 3.52929 14.3632 3.26894C14.1028 3.00859 13.6807 3.00859 13.4203 3.26894L5.4067 11.2826L2.5785 8.4544C2.31815 8.19405 1.89604 8.19405 1.63569 8.4544Z" fill="#969696"/>
      </g>
      <defs>
      <clipPath id="clip0_198_6479">
      <rect width="16" height="16" fill="white"/>
      </clipPath>
      </defs>
      </svg>`})
    }
  }
  clearConfirmEmailText = () =>
  {
    this.setState({confirm_email: '', confirm_crossEmailVisible: false, TickXML: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_198_6479)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.63569 8.4544C1.37534 8.71475 1.37534 9.13686 1.63569 9.39721L4.92063 12.6821C4.92535 12.6872 4.93016 12.6921 4.93507 12.697C5.06322 12.8252 5.23056 12.8903 5.39851 12.8922C5.57192 12.8944 5.74602 12.8294 5.87833 12.697C5.8833 12.6921 5.88817 12.687 5.89295 12.682L14.3632 4.21175C14.6235 3.9514 14.6235 3.52929 14.3632 3.26894C14.1028 3.00859 13.6807 3.00859 13.4203 3.26894L5.4067 11.2826L2.5785 8.4544C2.31815 8.19405 1.89604 8.19405 1.63569 8.4544Z" fill="#969696"/>
    </g>
    <defs>
    <clipPath id="clip0_198_6479">
    <rect width="16" height="16" fill="white"/>
    </clipPath>
    </defs>
    </svg>`})
  }

  signInBtnPressed = () =>
  {
    Keyboard.dismiss()
    

    if (this.state.email.trim() == '' && this.state.confirm_email.trim() == '')
    {
      this.setState({errEmail: true, confirm_errEmail: true, emailErrorText: 'Password field can not be blank',
      confirm_emailErrorText: 'Confirm Password field can not be blank', 
    TextBoxBorderColor: 'red', confirm_TextBoxBorderColor: 'red'})
    }
    else if (this.state.email.trim() == '')
    {
      this.setState({errEmail: true, emailErrorText: 'Password field can not be blank', TextBoxBorderColor: 'red'})
    }
    else if (this.state.confirm_email.trim() == '')
    {
      this.setState({confirm_errEmail: true,
        confirm_emailErrorText: 'Confirm Password field can not be blank', 
    confirm_TextBoxBorderColor: 'red'})
    }
    else if (this.state.email != this.state.confirm_email)
    {
      this.setState({confirm_errEmail: true,
        confirm_emailErrorText: 'Confirm Password did not match', 
    confirm_TextBoxBorderColor: 'red'})
    }
    else
    {
      
      this.props.navigation.navigate('ResetPasswordDonePage')
    }
  }
  
  render() {

   const { open, value, items } = this.state;

    return (
      
      <View style ={styles.container}>
<View style={styles.intersectImage}>
<SvgXml xml={intersectImage} />
</View> 
        <StatusBar backgroundColor='#4387bb' barStyle={'light-content'} />
<SafeAreaView>

<TouchableOpacity
onPress={() => this.props.navigation.goBack()} style={styles.backIconContainer}>
<SvgXml xml={BackIconXML} />
</TouchableOpacity>

<View style={styles.logoIconContainer}>
<SvgXml xml={logoXML} />
</View>

<View style={styles.titleLabelContainer}>
<Text style={styles.titleText}>
Create new password
    </Text>
</View>

<View style={styles.SignInTitleContainer}>
<Text style={styles.SignInTitleText}>
Your new password must be different from previous used passwords.
    </Text>
</View>

<View style={styles.LoginBody}>
              <Text style={styles.plainText}>New password</Text>
              <View style={[styles.inputContainer, 
                {backgroundColor: this.state.TextBoxBackgroundColor, borderColor: this.state.TextBoxBorderColor}]}>
                <View style={styles.inputIcon}>
                  <SvgXml width={20} xml={userXML} />
                </View>
                <TextInput
                  value={this.state.email}
                  onBlur={ () => this.onBlurEmail() }
        onFocus={ () => this.onFocusEmail() }
                  onChangeText={(text) => this.typingEmail(text)}
                  placeholder="Enter Email Address"
                  placeholderTextColor={this.state.TextBoxPlaceholderColor}
                  keyboardType='default'
                  style={styles.inputTag}
                  secureTextEntry={true}
                />
              {this.state.crossEmailVisible && <TouchableOpacity
      style={styles.inputIconCheck}
      onPress={() => this.clearEmailText()}>
                  <SvgXml width={20} xml={crossXML} />
                  </TouchableOpacity> }
              </View> 

              {this.state.errEmail && <Text style={styles.errText}>{this.state.emailErrorText}</Text> }

<Text style={[styles.plainText, { marginTop: 32 }]}>Confirm new password</Text>
              <View style={[styles.inputContainer, 
                {backgroundColor: this.state.confirm_TextBoxBackgroundColor, borderColor: this.state.confirm_TextBoxBorderColor}]}>
               <View style={styles.inputIcon}>
                  <SvgXml width={20} xml={this.state.TickXML} />
                </View>
                <TextInput
                  value={this.state.confirm_email}
                  onBlur={ () => this.onBlurConfirmEmail() }
        onFocus={ () => this.onFocusConfirmEmail() }
                  onChangeText={(text) => this.typingConfirmEmail(text)}
                  placeholder="Confirm your password"
                  placeholderTextColor={this.state.confirm_TextBoxPlaceholderColor}
                  keyboardType='default'
                  style={styles.inputTag}
                  secureTextEntry={true}
                />
              {this.state.confirm_crossEmailVisible && <TouchableOpacity
      style={styles.inputIconCheck}
      onPress={() => this.clearConfirmEmailText()}>
                  <SvgXml width={20} xml={crossXML} />
                  </TouchableOpacity> }
              </View> 

              {this.state.confirm_errEmail && <Text style={styles.errText}>{this.state.confirm_emailErrorText}</Text> }
           
              

           <TouchableOpacity
onPress={() => this.signInBtnPressed()}
style={[styles.ForgotPasswordContainer, {marginTop: 35}]}>
  <SvgXml xml={nextBtnXML} />
</TouchableOpacity>


              
            </View>


          </SafeAreaView>
          

      </View>
      

      

     
      
    );
  }

  onFocusEmail() {
    this.setState({
        TextBoxBackgroundColor: '#4F4F4F',
        TextBoxBorderColor: 'white',
        TextBoxPlaceholderColor: 'white'
        
    })
  }

  onBlurEmail() {
    this.setState({
      TextBoxBackgroundColor: 'transparent',
      TextBoxBorderColor: '#4F4F4F',
      TextBoxPlaceholderColor: '#4F4F4F',
      crossEmailVisible: false
    })
  }

  onFocusConfirmEmail() {
    this.setState({
      confirm_TextBoxBackgroundColor: '#4F4F4F',
      confirm_TextBoxBorderColor: 'white',
      confirm_TextBoxPlaceholderColor: 'white'
        
    })
  }

  onBlurConfirmEmail() {
    this.setState({
      confirm_TextBoxBackgroundColor: 'transparent',
      confirm_TextBoxBorderColor: '#4F4F4F',
      confirm_TextBoxPlaceholderColor: '#4F4F4F',
      confirm_crossEmailVisible: false
    })
  }


}

const styles = StyleSheet.create({
  backIconContainer: {
    flexDirection: 'row',
    position: 'absolute',
    left: 16,
top: 74,
// backgroundColor: 'red',
  },
  logoIconContainer: {
    flexDirection: 'row',
    position: 'absolute',
    left: 16,
top: 125,
// backgroundColor: 'red',
  },
  titleLabelContainer: {
    flexDirection: 'row',
    position: 'absolute',
left: 16,
top: 186,
  },
  SignInTitleContainer: {
    flexDirection: 'row',
    position: 'absolute',
left: 16,
top: 250,
  },
  titleText: {
width: 343,
height: 172, 
fontFamily: 'Poppins-Light',
fontWeight: 'bold',
color: 'white',
fontSize: 28
  },
  SignInTitleText: {
    width: 343,
    height: 72, 
    fontFamily: 'Poppins-Light',
    fontWeight: '400',
    color: 'white',
    fontSize: 16
      },

     LoginBody: {
        width: '100%',
        position: 'absolute',
top: 328,
        flexDirection: 'column',
      },
      plainText: {
        marginBottom: 10,
        color: 'white',
        marginLeft: 16,
marginRight: 16,
fontFamily: 'Poppins-Light',
fontWeight: '500',
fontSize: 16
      },
      ForgotPasswordText: {
        color: '#03BFB5',
fontFamily: 'Poppins-Light',
fontWeight: '400',
fontSize: 12,
      },
      ForgotPasswordContainer: {
        marginBottom: 10,
        marginRight: 16,
alignSelf: 'flex-end'
      },
      inputContainer: {
        borderWidth: 1,
        height: 50,
        alignItems: 'center',
        // borderColor: '#4F4F4F',
        flexDirection: 'row',
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 4
        
      },
      inputIcon: {
        // backgroundColor: GlobalStyle.colorSet.iconBackGround,
        height: '100%',
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
      },
      inputIconCheck: {
        // backgroundColor: GlobalStyle.colorSet.iconBackGround,
        height: '100%',
        width: 50,
        justifyContent: 'flex-end',
marginTop: -35,
marginLeft: -30
      },
      inputIconCheckForPasswordCross: {
        // backgroundColor: GlobalStyle.colorSet.iconBackGround,
        height: '100%',
        width: 50,
        justifyContent: 'flex-end',
marginTop: -32,
marginLeft: -50
      },
      inputIconCheckForPasswordHiddenOrShow: {
        // backgroundColor: GlobalStyle.colorSet.iconBackGround,
        height: '100%',
        width: 50,
        justifyContent: 'flex-end',
marginTop: -35,
marginLeft: -25
      },
      inputTag: {
        width: '85%',
        paddingLeft: 0,
        paddingRight: 3,
        color: 'white',
        fontFamily: 'Poppins-Light',
fontWeight: '400',
fontSize: 16,
paddingRight: 40
      },
  SignInButton: {borderWidth:1,position:'absolute',bottom:106,alignSelf:'center'},
  donthaveanAccount: {width: 343,flexDirection: 'row', borderWidth:1,position:'absolute',bottom:60,alignSelf:'center',
  alignItems: 'center', justifyContent: 'center'},
  container: {
    flex: 1,
      backgroundColor: "black",
    marginTop: 0,
    zIndex: 0,

  },
  donthaveanAccountText: {
    paddingTop: 4, paddingBottom: 4,  fontSize: 16, color: 'white'
    },
    SignUp: [
      {
        marginTop: 0,
        
        ...Platform.select({
          ios: {
            
           
          },
          android: {
            marginTop: 7.5
          },
        })
      },
    ],
    signupText: {
      color: '#000', fontSize: 15.2, color: '#03BFB5',
    },
    intersectImage: {position: 'absolute',
    width: 95.83,
    height: 219.55,
    right: 0,
    top: 0},
    errText: {
      marginTop: 5,
      color: 'red',
      fontSize: 11,
      marginBottom: -15,
      alignSelf: 'flex-start',
      marginLeft: 16,
      marginRight: 16,
      fontFamily: 'Poppins-Light',
  fontWeight: '400',
  fontSize: 12
  }

})