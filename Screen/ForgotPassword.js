import React,{Component, useState} from 'react';
import { Modal, StatusBar, Keyboard, ActivityIndicator, View, Text, ImageBackground, StyleSheet, AsyncStorage, Platform, FlatList, ScrollView, TouchableOpacity, Linking, SafeAreaView, TextInput, Image, Dimensions } from 'react-native'
import { SvgXml } from 'react-native-svg';
import SignInBtn from '../components/SignInBtnUI';
import KeyboardManager from 'react-native-keyboard-manager';
const userXML = `<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.571777 2.44572L7.26321 8.09258C7.4694 8.26661 7.73052 8.36208 8.00035 8.36208C8.27017 8.36208 8.5313 8.26661 8.73749 8.09258L15.4289 2.44572M0.571777 1H15.4289V13H0.571777V1Z" stroke="#969696" stroke-width="1.14286" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

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

const nextBtnXML = `<svg width="171" height="36" viewBox="0 0 171 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="171" height="36" rx="18" fill="url(#paint0_linear_79_5115)"/>
<path d="M23.8323 13.596C23.6091 13.3728 23.2473 13.3728 23.0241 13.596C22.801 13.8191 22.801 14.1809 23.0241 14.4041L26.0486 17.4286H12.5714C12.2558 17.4286 12 17.6844 12 18C12 18.3156 12.2558 18.5714 12.5714 18.5714H26.0486L23.0241 21.596C22.801 21.8191 22.801 22.1809 23.0241 22.4041C23.2473 22.6272 23.6091 22.6272 23.8323 22.4041L27.8201 18.4162C27.9309 18.312 28 18.1641 28 18C28 17.836 27.9309 17.688 27.8201 17.5838L23.8323 13.596Z" fill="white"/>
<path d="M40.7384 23.098C40.0851 23.098 39.4971 22.986 38.9744 22.762C38.4518 22.5287 38.0411 22.202 37.7424 21.782C37.4438 21.362 37.2944 20.872 37.2944 20.312H39.0024C39.0398 20.732 39.2031 21.0773 39.4924 21.348C39.7911 21.6187 40.2064 21.754 40.7384 21.754C41.2891 21.754 41.7184 21.6233 42.0264 21.362C42.3344 21.0913 42.4884 20.746 42.4884 20.326C42.4884 19.9993 42.3904 19.7333 42.1944 19.528C42.0078 19.3227 41.7698 19.164 41.4804 19.052C41.2004 18.94 40.8084 18.8187 40.3044 18.688C39.6698 18.52 39.1518 18.352 38.7504 18.184C38.3584 18.0067 38.0224 17.736 37.7424 17.372C37.4624 17.008 37.3224 16.5227 37.3224 15.916C37.3224 15.356 37.4624 14.866 37.7424 14.446C38.0224 14.026 38.4144 13.704 38.9184 13.48C39.4224 13.256 40.0058 13.144 40.6684 13.144C41.6111 13.144 42.3811 13.382 42.9784 13.858C43.5851 14.3247 43.9211 14.9687 43.9864 15.79H42.2224C42.1944 15.4353 42.0264 15.132 41.7184 14.88C41.4104 14.628 41.0044 14.502 40.5004 14.502C40.0431 14.502 39.6698 14.6187 39.3804 14.852C39.0911 15.0853 38.9464 15.4213 38.9464 15.86C38.9464 16.1587 39.0351 16.406 39.2124 16.602C39.3991 16.7887 39.6324 16.938 39.9124 17.05C40.1924 17.162 40.5751 17.2833 41.0604 17.414C41.7044 17.5913 42.2271 17.7687 42.6284 17.946C43.0391 18.1233 43.3844 18.3987 43.6644 18.772C43.9538 19.136 44.0984 19.626 44.0984 20.242C44.0984 20.7367 43.9631 21.2033 43.6924 21.642C43.4311 22.0807 43.0438 22.4353 42.5304 22.706C42.0264 22.9673 41.4291 23.098 40.7384 23.098ZM53.0516 18.954C53.0516 19.2433 53.033 19.5047 52.9956 19.738H47.1016C47.1483 20.354 47.377 20.8487 47.7876 21.222C48.1983 21.5953 48.7023 21.782 49.2996 21.782C50.1583 21.782 50.765 21.4227 51.1196 20.704H52.8416C52.6083 21.4133 52.1836 21.9967 51.5676 22.454C50.961 22.902 50.205 23.126 49.2996 23.126C48.5623 23.126 47.8996 22.9627 47.3116 22.636C46.733 22.3 46.2756 21.8333 45.9396 21.236C45.613 20.6293 45.4496 19.9293 45.4496 19.136C45.4496 18.3427 45.6083 17.6473 45.9256 17.05C46.2523 16.4433 46.705 15.9767 47.2836 15.65C47.8716 15.3233 48.5436 15.16 49.2996 15.16C50.0276 15.16 50.6763 15.3187 51.2456 15.636C51.815 15.9533 52.2583 16.4013 52.5756 16.98C52.893 17.5493 53.0516 18.2073 53.0516 18.954ZM51.3856 18.45C51.3763 17.862 51.1663 17.3907 50.7556 17.036C50.345 16.6813 49.8363 16.504 49.2296 16.504C48.679 16.504 48.2076 16.6813 47.8156 17.036C47.4236 17.3813 47.1903 17.8527 47.1156 18.45H51.3856ZM58.5143 15.16C59.1209 15.16 59.6623 15.286 60.1383 15.538C60.6236 15.79 61.0016 16.1633 61.2723 16.658C61.5429 17.1527 61.6783 17.75 61.6783 18.45V23H60.0963V18.688C60.0963 17.9973 59.9236 17.47 59.5783 17.106C59.2329 16.7327 58.7616 16.546 58.1643 16.546C57.5669 16.546 57.0909 16.7327 56.7363 17.106C56.3909 17.47 56.2183 17.9973 56.2183 18.688V23H54.6223V15.286H56.2183V16.168C56.4796 15.8507 56.8109 15.6033 57.2123 15.426C57.6229 15.2487 58.0569 15.16 58.5143 15.16ZM63.1821 19.108C63.1821 18.3333 63.3407 17.6473 63.6581 17.05C63.9847 16.4527 64.4234 15.9907 64.9741 15.664C65.5341 15.328 66.1547 15.16 66.8361 15.16C67.3401 15.16 67.8347 15.272 68.3201 15.496C68.8147 15.7107 69.2067 16 69.4961 16.364V12.64H71.1061V23H69.4961V21.838C69.2347 22.2113 68.8707 22.5193 68.4041 22.762C67.9467 23.0047 67.4194 23.126 66.8221 23.126C66.1501 23.126 65.5341 22.958 64.9741 22.622C64.4234 22.2767 63.9847 21.8007 63.6581 21.194C63.3407 20.578 63.1821 19.8827 63.1821 19.108ZM69.4961 19.136C69.4961 18.604 69.3841 18.142 69.1601 17.75C68.9454 17.358 68.6607 17.0593 68.3061 16.854C67.9514 16.6487 67.5687 16.546 67.1581 16.546C66.7474 16.546 66.3647 16.6487 66.0101 16.854C65.6554 17.05 65.3661 17.344 65.1421 17.736C64.9274 18.1187 64.8201 18.576 64.8201 19.108C64.8201 19.64 64.9274 20.1067 65.1421 20.508C65.3661 20.9093 65.6554 21.2173 66.0101 21.432C66.3741 21.6373 66.7567 21.74 67.1581 21.74C67.5687 21.74 67.9514 21.6373 68.3061 21.432C68.6607 21.2267 68.9454 20.928 69.1601 20.536C69.3841 20.1347 69.4961 19.668 69.4961 19.136ZM77.6511 14.264C77.3617 14.264 77.1191 14.166 76.9231 13.97C76.7271 13.774 76.6291 13.5313 76.6291 13.242C76.6291 12.9527 76.7271 12.71 76.9231 12.514C77.1191 12.318 77.3617 12.22 77.6511 12.22C77.9311 12.22 78.1691 12.318 78.3651 12.514C78.5611 12.71 78.6591 12.9527 78.6591 13.242C78.6591 13.5313 78.5611 13.774 78.3651 13.97C78.1691 14.166 77.9311 14.264 77.6511 14.264ZM78.4351 15.286V23H76.8391V15.286H78.4351ZM84.4225 15.16C85.0291 15.16 85.5705 15.286 86.0465 15.538C86.5318 15.79 86.9098 16.1633 87.1805 16.658C87.4511 17.1527 87.5865 17.75 87.5865 18.45V23H86.0045V18.688C86.0045 17.9973 85.8318 17.47 85.4865 17.106C85.1411 16.7327 84.6698 16.546 84.0725 16.546C83.4751 16.546 82.9991 16.7327 82.6445 17.106C82.2991 17.47 82.1265 17.9973 82.1265 18.688V23H80.5305V15.286H82.1265V16.168C82.3878 15.8507 82.7191 15.6033 83.1205 15.426C83.5311 15.2487 83.9651 15.16 84.4225 15.16ZM92.4223 23.126C91.8156 23.126 91.2696 23.0187 90.7843 22.804C90.3083 22.58 89.9303 22.2813 89.6503 21.908C89.3703 21.5253 89.2209 21.1007 89.2023 20.634H90.8543C90.8823 20.9607 91.0363 21.236 91.3163 21.46C91.6056 21.6747 91.9649 21.782 92.3943 21.782C92.8423 21.782 93.1876 21.698 93.4303 21.53C93.6823 21.3527 93.8083 21.1287 93.8083 20.858C93.8083 20.5687 93.6683 20.354 93.3883 20.214C93.1176 20.074 92.6836 19.92 92.0863 19.752C91.5076 19.5933 91.0363 19.4393 90.6723 19.29C90.3083 19.1407 89.9909 18.912 89.7203 18.604C89.4589 18.296 89.3283 17.89 89.3283 17.386C89.3283 16.9753 89.4496 16.602 89.6923 16.266C89.9349 15.9207 90.2803 15.65 90.7283 15.454C91.1856 15.258 91.7083 15.16 92.2963 15.16C93.1736 15.16 93.8783 15.384 94.4103 15.832C94.9516 16.2707 95.2409 16.8727 95.2783 17.638H93.6823C93.6543 17.2927 93.5143 17.0173 93.2623 16.812C93.0103 16.6067 92.6696 16.504 92.2403 16.504C91.8203 16.504 91.4983 16.5833 91.2743 16.742C91.0503 16.9007 90.9383 17.1107 90.9383 17.372C90.9383 17.5773 91.0129 17.75 91.1623 17.89C91.3116 18.03 91.4936 18.142 91.7083 18.226C91.9229 18.3007 92.2403 18.3987 92.6603 18.52C93.2203 18.6693 93.6776 18.8233 94.0323 18.982C94.3963 19.1313 94.7089 19.3553 94.9703 19.654C95.2316 19.9527 95.3669 20.3493 95.3763 20.844C95.3763 21.2827 95.2549 21.6747 95.0123 22.02C94.7696 22.3653 94.4243 22.636 93.9763 22.832C93.5376 23.028 93.0196 23.126 92.4223 23.126ZM98.9628 16.588V20.858C98.9628 21.1473 99.0281 21.3573 99.1588 21.488C99.2988 21.6093 99.5321 21.67 99.8588 21.67H100.839V23H99.5788C98.8601 23 98.3094 22.832 97.9268 22.496C97.5441 22.16 97.3528 21.614 97.3528 20.858V16.588H96.4428V15.286H97.3528V13.368H98.9628V15.286H100.839V16.588H98.9628ZM103.906 16.406C104.139 16.014 104.447 15.7107 104.83 15.496C105.222 15.272 105.684 15.16 106.216 15.16V16.812H105.81C105.184 16.812 104.708 16.9707 104.382 17.288C104.064 17.6053 103.906 18.156 103.906 18.94V23H102.31V15.286H103.906V16.406ZM114.669 15.286V23H113.073V22.09C112.821 22.4073 112.489 22.6593 112.079 22.846C111.677 23.0233 111.248 23.112 110.791 23.112C110.184 23.112 109.638 22.986 109.153 22.734C108.677 22.482 108.299 22.1087 108.019 21.614C107.748 21.1193 107.613 20.522 107.613 19.822V15.286H109.195V19.584C109.195 20.2747 109.367 20.8067 109.713 21.18C110.058 21.544 110.529 21.726 111.127 21.726C111.724 21.726 112.195 21.544 112.541 21.18C112.895 20.8067 113.073 20.2747 113.073 19.584V15.286H114.669ZM116.243 19.136C116.243 18.3427 116.401 17.6473 116.719 17.05C117.045 16.4433 117.493 15.9767 118.063 15.65C118.632 15.3233 119.285 15.16 120.023 15.16C120.956 15.16 121.726 15.384 122.333 15.832C122.949 16.2707 123.364 16.9007 123.579 17.722H121.857C121.717 17.3393 121.493 17.0407 121.185 16.826C120.877 16.6113 120.489 16.504 120.023 16.504C119.369 16.504 118.847 16.7373 118.455 17.204C118.072 17.6613 117.881 18.3053 117.881 19.136C117.881 19.9667 118.072 20.6153 118.455 21.082C118.847 21.5487 119.369 21.782 120.023 21.782C120.947 21.782 121.558 21.376 121.857 20.564H123.579C123.355 21.348 122.935 21.9733 122.319 22.44C121.703 22.8973 120.937 23.126 120.023 23.126C119.285 23.126 118.632 22.9627 118.063 22.636C117.493 22.3 117.045 21.8333 116.719 21.236C116.401 20.6293 116.243 19.9293 116.243 19.136ZM127.031 16.588V20.858C127.031 21.1473 127.096 21.3573 127.227 21.488C127.367 21.6093 127.6 21.67 127.927 21.67H128.907V23H127.647C126.928 23 126.378 22.832 125.995 22.496C125.612 22.16 125.421 21.614 125.421 20.858V16.588H124.511V15.286H125.421V13.368H127.031V15.286H128.907V16.588H127.031ZM131.19 14.264C130.901 14.264 130.658 14.166 130.462 13.97C130.266 13.774 130.168 13.5313 130.168 13.242C130.168 12.9527 130.266 12.71 130.462 12.514C130.658 12.318 130.901 12.22 131.19 12.22C131.47 12.22 131.708 12.318 131.904 12.514C132.1 12.71 132.198 12.9527 132.198 13.242C132.198 13.5313 132.1 13.774 131.904 13.97C131.708 14.166 131.47 14.264 131.19 14.264ZM131.974 15.286V23H130.378V15.286H131.974ZM137.416 23.126C136.688 23.126 136.03 22.9627 135.442 22.636C134.854 22.3 134.392 21.8333 134.056 21.236C133.72 20.6293 133.552 19.9293 133.552 19.136C133.552 18.352 133.724 17.6567 134.07 17.05C134.415 16.4433 134.886 15.9767 135.484 15.65C136.081 15.3233 136.748 15.16 137.486 15.16C138.223 15.16 138.89 15.3233 139.488 15.65C140.085 15.9767 140.556 16.4433 140.902 17.05C141.247 17.6567 141.42 18.352 141.42 19.136C141.42 19.92 141.242 20.6153 140.888 21.222C140.533 21.8287 140.048 22.3 139.432 22.636C138.825 22.9627 138.153 23.126 137.416 23.126ZM137.416 21.74C137.826 21.74 138.209 21.642 138.564 21.446C138.928 21.25 139.222 20.956 139.446 20.564C139.67 20.172 139.782 19.696 139.782 19.136C139.782 18.576 139.674 18.1047 139.46 17.722C139.245 17.33 138.96 17.036 138.606 16.84C138.251 16.644 137.868 16.546 137.458 16.546C137.047 16.546 136.664 16.644 136.31 16.84C135.964 17.036 135.689 17.33 135.484 17.722C135.278 18.1047 135.176 18.576 135.176 19.136C135.176 19.9667 135.386 20.6107 135.806 21.068C136.235 21.516 136.772 21.74 137.416 21.74ZM146.889 15.16C147.496 15.16 148.037 15.286 148.513 15.538C148.999 15.79 149.377 16.1633 149.647 16.658C149.918 17.1527 150.053 17.75 150.053 18.45V23H148.471V18.688C148.471 17.9973 148.299 17.47 147.953 17.106C147.608 16.7327 147.137 16.546 146.539 16.546C145.942 16.546 145.466 16.7327 145.111 17.106C144.766 17.47 144.593 17.9973 144.593 18.688V23H142.997V15.286H144.593V16.168C144.855 15.8507 145.186 15.6033 145.587 15.426C145.998 15.2487 146.432 15.16 146.889 15.16ZM154.889 23.126C154.282 23.126 153.736 23.0187 153.251 22.804C152.775 22.58 152.397 22.2813 152.117 21.908C151.837 21.5253 151.688 21.1007 151.669 20.634H153.321C153.349 20.9607 153.503 21.236 153.783 21.46C154.072 21.6747 154.432 21.782 154.861 21.782C155.309 21.782 155.654 21.698 155.897 21.53C156.149 21.3527 156.275 21.1287 156.275 20.858C156.275 20.5687 156.135 20.354 155.855 20.214C155.584 20.074 155.15 19.92 154.553 19.752C153.974 19.5933 153.503 19.4393 153.139 19.29C152.775 19.1407 152.458 18.912 152.187 18.604C151.926 18.296 151.795 17.89 151.795 17.386C151.795 16.9753 151.916 16.602 152.159 16.266C152.402 15.9207 152.747 15.65 153.195 15.454C153.652 15.258 154.175 15.16 154.763 15.16C155.64 15.16 156.345 15.384 156.877 15.832C157.418 16.2707 157.708 16.8727 157.745 17.638H156.149C156.121 17.2927 155.981 17.0173 155.729 16.812C155.477 16.6067 155.136 16.504 154.707 16.504C154.287 16.504 153.965 16.5833 153.741 16.742C153.517 16.9007 153.405 17.1107 153.405 17.372C153.405 17.5773 153.48 17.75 153.629 17.89C153.778 18.03 153.96 18.142 154.175 18.226C154.39 18.3007 154.707 18.3987 155.127 18.52C155.687 18.6693 156.144 18.8233 156.499 18.982C156.863 19.1313 157.176 19.3553 157.437 19.654C157.698 19.9527 157.834 20.3493 157.843 20.844C157.843 21.2827 157.722 21.6747 157.479 22.02C157.236 22.3653 156.891 22.636 156.443 22.832C156.004 23.028 155.486 23.126 154.889 23.126Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_79_5115" x1="85.5" y1="0" x2="85.5" y2="36" gradientUnits="userSpaceOnUse">
<stop stop-color="#03BFB5"/>
<stop offset="1" stop-color="#0B7F79"/>
</linearGradient>
</defs>
</svg>
`;
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
      TextBoxBackgroundColor: '#222222',
      TextBoxBorderColor: '#4F4F4F',
      TextBoxPlaceholderColor: '#969696',
      crossEmailVisible: false,
    

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

  signInBtnPressed = () =>
  {
    Keyboard.dismiss()
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

     if (this.state.email.trim() == '')
    {
      this.setState({errEmail: true, emailErrorText: 'Email Address field can not be blank'
    })
    }
    else if (reg.test(this.state.email.trim()) === false) {
      
      this.setState({errEmail: true, emailErrorText: 'Email is Not Correct'
    })
    }
    else 
    {
      this.setState({errEmail: false})
      this.props.navigation.navigate('CheckMailPage')
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
Forgot your password?
    </Text>
</View>

<View style={styles.SignInTitleContainer}>
<Text style={styles.SignInTitleText}>
Enter the email address assosiated with your account and we’ll send an email with instructions to reset your password.
    </Text>
</View>

<ScrollView
        // keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps={'always'} style={styles.LoginBody}>
              <Text style={styles.plainText}>Email Address</Text>
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
                  keyboardType="email-address"
                  autoCapitalize={false}
                  style={styles.inputTag}
                />
              {this.state.crossEmailVisible && <TouchableOpacity
      style={styles.inputIconCheck}
      onPress={() => this.clearEmailText()}>
                  <SvgXml width={20} xml={crossXML} />
                  </TouchableOpacity> }
              </View> 

              {this.state.errEmail && <Text style={styles.errText}>{this.state.emailErrorText}</Text> }
           
              

           <TouchableOpacity
onPress={() => this.signInBtnPressed()}
style={[styles.ForgotPasswordContainer, {marginTop: 35}]}>
  <SvgXml xml={nextBtnXML} />
</TouchableOpacity>


              
            </ScrollView>


          </SafeAreaView>
          

      </View>
      

      

     
      
    );
  }

  onFocusEmail() {
    this.setState({
        TextBoxBorderColor: 'white',
        TextBoxPlaceholderColor: '#BEBEBE'
        
    })
  }

  onBlurEmail() {
    this.setState({
      TextBoxBorderColor: '#4F4F4F',
      TextBoxPlaceholderColor: '#969696',
      crossEmailVisible: false
    })

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

     if (this.state.email.trim() == '')
    {
      this.setState({errEmail: true, emailErrorText: 'Email Address field can not be blank', TextBoxBorderColor: 'red'
    })
    }
    else if (reg.test(this.state.email.trim()) === false) {
      
      this.setState({errEmail: true, emailErrorText: 'Email is Not Correct',TextBoxBorderColor: 'red'
    })
    }
    else 
    {

    }
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
fontFamily: 'Poppins-SemiBold',
// fontWeight: 'bold',
color: 'white',
fontSize: 28
  },
  SignInTitleText: {
    width: 343,
    height: 72, 
    fontFamily: 'Poppins-Light',
    // fontWeight: '400',
    color: 'white',
    fontSize: 16
      },

     LoginBody: {
        width: '100%',
        position: 'absolute',
top: 358,
        flexDirection: 'column',
      },
      plainText: {
        marginBottom: 10,
        color: 'white',
        marginLeft: 16,
marginRight: 16,
fontFamily: 'Poppins-SemiBold',
// fontWeight: '500',
fontSize: 16
      },
      ForgotPasswordText: {
        color: '#03BFB5',
fontFamily: 'Poppins-Light',
// fontWeight: '400',
fontSize: 12,
      },
      ForgotPasswordContainer: {
        marginBottom: 10,
        marginRight: 16,
alignSelf: 'flex-end'
      },
      inputContainer: {
        borderWidth: 1,
        height: 36,
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
marginTop: -20,
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
// fontWeight: '400',
fontSize: 14,
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
  // fontWeight: '400',
  fontSize: 12
  },

})