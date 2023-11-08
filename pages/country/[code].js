import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import SubLayout from "@/components/SubLayout";
import { fetchCountry } from "@/api";
import style from "./[code].module.css";
import Head from "next/head";
export default function Country({ country }) {
	const router = useRouter();

	if (router.isFallback) {
		// ssg설정을 통해 html페이지 완성 전 까지 fallback을 렌더
		return (
			<>
				<Head>
					<title>NARAS</title>
					<meta property="og:image" content="/thumbnail.png" />
					<meta property="og:title" content="NARAS" />
					<meta property="og:description" content="전 세계 국가들의 정보를 확인해보세요" />
					{/* fallback상태일 때는 index페이지와 동일한 메타태그 설정 */}
					<title></title>
				</Head>
				<div>Loading...</div>
			</>
		);
	}
	if (!country) {
		return <div>존재하지 않는 국가입니다.</div>;
	}

	return (
		<>
      <Head>
        <title>{country.commonName} 국가 정보 조회</title>
        <meta property="og:image" content={country.flagImg}/>
        <meta propery="og:title" content={
          `${country.commonName} 국가 정보 조회 | NARAS`
        }/>
        <meta property="og:description" content={
          `${country.commonName} 국가의 자세한 정보입니다.`
        }/>
      </Head>
			<div className={style.container}>
				<div className={style.header}>
					<div className={style.commonName}>
						{country.flagEmoji}&nbsp;{country.commonName}
					</div>
					<div className={style.officialName}>{country.officialName}</div>
				</div>
				<div className={style.flag_img}>
					<Image src={country.flagImg} fill alt={`${country.commonName}의 국기 이미지입니다`} />
				</div>
				<div className={style.body}>
					<div>
						<b>코드 :</b>&nbsp;{country.code}
					</div>
					<div>
						<b>수도 :</b>&nbsp;{country.capital.join(", ")}
					</div>
					<div>
						<b>지역 :</b>&nbsp;{country.region}
					</div>
					<div>
						<b>지도 :</b>&nbsp;
						<a target="_blank" href={country.googleMapURL}>
							{country.googleMapURL}
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
Country.Layout = SubLayout; //_app.js의 Component로 해당 페이지 컴포넌트가 할당됨
export const getStaticPaths = async () => {
	return {
		paths: [
			{ params: { code: "ABW" } }, //params변수가 value의 키값으로
			{ params: { code: "KOR" } },
		],
		fallback: true,
		//따로 보여줄 페이지가 있다면
	};
};

export const getStaticProps = async context => {
	const { code } = context.params; //url parameter
	console.log(`${code}페이지 생성 `);

	let country = null;
	if (code) country = await fetchCountry(code);

	return {
		props: {
			country,
		},
		revalidate: 3, // second 단위로 입력 -> 3초마다 빌드
	};
};
