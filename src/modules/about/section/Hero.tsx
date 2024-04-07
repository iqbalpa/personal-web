import React from "react";
import Image from "next/image";
import IqbalV2 from "../../../../public/assets/iqbal-v2.jpg";

const Hero: React.FC = () => {
	return (
		<div className="w-full flex flex-col items-center justify-center">
            <Image src={IqbalV2} alt="Iqbal" className="rounded-full mb-2" width={200} height={200} />
			<p className="w-3/5 text-center">
				a computer science student who loves to learn machine learning and building something as a software
				engineer
			</p>
		</div>
	);
};

export default Hero;
