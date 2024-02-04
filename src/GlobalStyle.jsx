import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);

@font-face {
    font-family: 'KOTRAHOPE';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/KOTRAHOPE.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'NanumSquareNeo-Variable';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'JalnanGothic';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_231029@1.1/JalnanGothic.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

:root{
	--bg--main-color: #14183f;
	--bg--section-color:#EAE3D2;
	--bg--fanletter-color:#F9F5EB;
	--text-color:#FFFFFF;

}

*{
    box-sizing: border-box;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, blockquote, p, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video, textarea {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font-family: 'NanumSquareNeo-Variable';
	vertical-align: baseline;
	
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	line-height: 1.5;
	font-family: 'NanumSquareNeo-Variable';
	background: rgba(249, 245, 235, 0.80);
}

ol, ul {
	list-style: none;
	font-family: 'NanumSquareNeo-Variable';
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

export default GlobalStyle;
