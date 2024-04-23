import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const postData: Prisma.PostCreateInput[] = [
	{
		title: "Semester 1 Ilmu Komputer",
		content: [
			"Disclaimer dulu, aku bukanlah orang yang suka menulis, jadi harap dimaklumi kalau diksi yang aku pakai sangat jelek dan berantakan hehe. Ini juga akan menjadi tulisan pertamaku disini.",
			"Anyway, tahun ini merupakan tahun pertamaku di jurusan Ilmu Komputer. Aku telah menyelesaikan semester 1 sejak tanggal 21 Desember 2021 (UAS Pengantar Sistem Digital). Sebenarnya menurutku semester ini tidak terlalu sibuk karena aku memang tidak ikut kepanitiaan sama sekali dan hanya ikut magang organisasi di BEM Fasilkom dan FUKI Fasilkom. Tetapi, beban materi kuliah yang diberikan itu cukup berat karena ada matkul yang benar-benar baru dan tidak pernah diajarkan saat SMA. Berikut pendapat dan testimoniku untuk mata kuliah yang sudah aku tempuh kemarin.",
			"1. Kalkulus 1",
			"Materi kalkulus tidak terlalu sulit karena materi yang diajarkan kurang lebih sama dengan apa yang telah dipelajari saat SMA. Untuk PR yang diberikan juga tidak terlalu banyak dan jangka waktu yang cukup panjang (biasanya sekitar 10 hari). Yang agak suram adalah kuis mingguan 🙂 Sebenarnya menurutku soal-soal yang diberikan tidak terlalu sulit. Tapi, durasi waktunya itu loh hhhhh. Biasanya ada 3 atau 4 soal esai dengan durasi pengerjaan cuma 30 menit. Yah begitulah.",
			"2. Matematika Diskret 1",
			"Overall materi matematika diskret 1 atau sering biasa disebut juga matdis 1 ini tidak terlalu “sulit”. Yang susah adalah bagaimana cara mengimplementasikan apa yang lah dipelajari ke dalam soal-soal yang diberikan. Terus juga, untuk PR matdis walaupun cuma 4x dalam satu semester dan durasi pengerjaan selama kurang lebih 10 hari. Tapi, ngulinya masyaallah. Untuk ujian soal-soal yang diberikan tidak jauh berbeda dengan soal PR, dan tentu saja dengan waktu yang jauh lebih singkat, yaitu 2 jam 30 menit saja.",
			"3. Dasar-Dasar Pemrograman 1",
			"Ini adalah mata kuliah favoritku di semester ini. Materi yang diajarkan tidak terlalu sulit yaitu mengenai fundamental dalam coding yang menggunakan bahasa pemrograman Python. Selain itu juga ini disebabkan aku dapat dosen yang enakk banget dalam menjelaskan materinya. Di matkul ini akan ada Lab hampir setiap minggunya (ada 10x Lab dalam satu semester) dan ada juga Tugas Pemrograman yang diberikan hanya 4x dalam satu semester. Tugas Pemrograman kurang lebih mirip dengan tugas Lab, tentu saja dengan tingkatan yang lebih sulit dan nguli. Untuk UTS dan UAS juga tidak terlalu sulit.",
			"4. Pengantar Sistem Digital",
			"Pengantar Sistem Digital atau PSD, ini merupakan mata kuliah yang menurutku paling susahhh karena materi yang diajarkan sangat fresh dan tidak pernah diajarkan di SMA. Materi matkul ini sangatlah absurd, kurang lebihnya membahas mengenai logic komputer. Tugas mingguan yang diberikan tidak terlalu sulit, yang sulit banget tuh adalah tugas Lab mingguan (aku beberapa kali ga kelar ngerjain Lab, padahal udah di-extend waktunya, untung pemberi nilai alias kakak asdosnya baik :D). Kemudian untuk UTS dan UAS menurutku tidak sesulit Lab. Matkul ini sebenarnya cukup menarik jika bisa memahami konsep yang ada (Neso Academy to the rescue).",
			"5. MPK Agama",
			"Ya seperti namanya matkul ini akan membahas mengenai agama masing-masing. Kalau aku MPK Agama Islam membahas mengenai sejarah Islam dan hubungan Islam dengan Nusantara. Matkul ini mempunyai tugas mingguan atau biasa disebut LTM. Untuk UTS dan UAS cenderung menanyakan pendapat kita mengenai suatu isu yang berhubungan dengan materi yang telah diajarkan.",
			"Ya secara keseluruhan semester 1 ini cukup menarik dengan segala kelebihan dan kekurangannya. Alhamdulillah, semester ini aku berhasil mendapat IP diatas target 😀 walaupun di sepanjang semester aku selalu khawatir dengan nilai PSD karena aku struggle banget di matkul ini hahah, tapi herannya nilain akhir PSD-ku malah jadi yang tertinggi dibanding matkul yang lain.",
			"Yeah, that’s all for now, see you in the next post.",
		],
		references: [""],
	},
	{
		title: "Semester 2 Ilmu Komputer",
		content: [
			"Finally, I decided to start doing these things again(?) soalnya liburan ini liat temen-temen pada sibuk kepanitiaan-organisasi, meanwhile me here still the same as nolep as always lol. Jadi yaa walaupun sekarang masih tetep nolep setidaknya ada kegiatan yang (sepertinya) produktif, yaitu menulis di blog. Sebenernya aku pengen nulis ini udah dari 28 Juni 2022 (indeks semua matkul udah keluar), tapi karena males yaudah baru nulis sekarang ini.",
			"Semester ini aku memutuskan buat ikut BEM UI di Biro Penelitian dan Pengembangan (I’ll call this as litbang later on). Entah gimana ceritanya waktu itu tiba-tiba ngide banget buat nyoba daftar bem ui, mana pas nanya temen dia langsung gas-gas aja. Long short story, aku lolos jadi staf litbang. First impression keterima di litbang tuh kaget kayak kok bisa yah wkwkw. This would definitely become my very-new-experience.",
			"Jobdesc proker-proker (program kerja) di litbang cukup banyak, tapi tidak sesusah dan seberat itu. Tapi, karena ini adalah transisiku dari semester 1 yang nolep alias kerjaannya hanya belajar doang ke semester 2 yang lumayan ga nolep lagi, manajemen waktuku di semester 2 kemarin cukup buruk. Aku jadi hampir ga pernah belajar materi diluar kelas kecuali kalau ada preclass quiz dan mau ngerjain tugas. Bahkan, buat weekly quiz POK, pretest dan programming quiz DDP, kuis Alin, dan kuis Statprob aku juga hampir ga pernah belajar 😀 tapi alhamdulillah nilainya yang bobrok banget cuma di quiz POK. Pernah sih dapet nilai yang jelek banget gara-gara ga belajar, yaitu 0/100 di kuis 3 Statprob wkwkwk. Oke deh lanjut aja, berikut adalah testimoniku terhadap matkul semester ini.",
			"1. Dasar-Dasar Pemrograman 2 (DDP 2)",
			"DDP 2, banyak kating yang bilang materinya mudah karena pada dasarnya materinya sama kayak DDP 1, cuma bedanya sekarang make Java dan lebih ditekankan ke prinsip OOP. Tapi nyatanya astagfirullah, susah banget mahamin konsep-konsepnya 😦 (kalo ngodingnya ga terlalu susah sih). Di kelasku tiap minggu ada dua kuis, yaitu pretest quiz (materi dan konsep) serta programming quiz (ngoding). Alhamdulillah pada akhirnya masih bisa dapet nilai yang memuaskan. Intinya kalo bisa menjalani DDP 1 dengan baik, DDP 2 juga ngikut dengan catatan perlu memperdalam di konsep OOP-nya aja.",
			"2. Matematika Diskret 2 (Matdis 2)",
			"Overall, matdis 2 kurang lebih sama kayak matdis 1. Ada preclass quiz hampir tiap minggu dan juga tugas yang nguli. Bedanya di matdis 2 ini ada hal yang baru, yaitu FGD (forum group discussion) yang menurutku cukup membantu dalam memahami materi yang diajarkan. Untuk materi yang diajarkan ada empat subbab, yaitu teori bilangan, teknik berhitung lanjut, relasi, dan graf. Menurutku materi pre-uts (teori bilangan dan teknik berhitung lanjut) sebenarnya teorinya mudah buat dipahamin, tapi pas liat soal-soal ya gitu kalo matdis mah. Kemudian buat materi post-uts (relasi dan graf) relatif lebih mudah daripada materi pre-uts, cuman harus menghafal banyak istilah aja.",
			"3. Pengantar Organisasi Komputer (POK)",
			"POK adalah matkul lanjutan dari PSD di semester 1 dan juga masih sama teknisnya, ada tugas dan lab mingguan. Materi yang diajarkan mencakup arsitektur komputer dan segala macamnya yang sangat abstrak (at least for me). Nanti juga bakal diajarin ngoding pake bahasa mesin atau assembly (MIPS dan AVR). Ini adalah matkul terajkfshkajfh😭 struggle-nya kerasa banget di matkul ini ya allah. Jarang bisa mahamin materi (padahal udah nonton video asinkron), nilai weekly quiz yang sangat suram (di rentang 40-60 hahahhah), dan juga ngerjain lab jarang bisa sampe selesai. Ini adalah pertama kalinya aku hopeless di suatu matkul wkwk (update oktober 2023: ntar di semester 4 adpro lebih hopeless lagi), pikirku “yang penting lulus aja deh, dapet indeks C pun gapapa.” Tapi somehow indeks akhir POK-ku cukup mengagetkan karena bagus banget jauh di atas ekspektasiku :o. Thank you banget asdos POK buat nilai Labnya yang meng-carry indeks hehe.",
			"4. MPKT",
			"Ini adalah salah satu matkul wajib di UI yang terdiri atas 5 sks, MPKT tuh ada kepanjangannya tapi apa ya aku lupa. MPKT itu enaknya ga pernah ada kelas sinkron, ada cuma pas minggu pertama doang. Tapii, tugas-tugasnya astagfirullah tiap minggu ada, either tugas mandiri/LTM atau tugas kelompok. Intinya ini matkul tugasnya nguli banget dan kalo sampe dapet kelompok yang ilang-ilangan yaudah, siap-siap buat nge-carry aja. Kayaknya ini adalah the most hated matkul di UI wkwk.",
			"5. Aljabar Linier (Alin)",
			"Sebenernya Alin adalah matkul di semester 3, tapi aku memutuskan buat ambil di semester 2 buat ngisi kekosongan Kalkulus 2. Ekspektasi pertama saat ngambil Alin aku kira bakal belajar bilangan imajiner juga, tapi ternyata tidak ada sama sekali :((. Kemudian ekspektasi kedua, karena ini adalah matkul “matematika” aku pikir pasti bakal banyak menghitung. Tapi ternyata, entah kenapa Alin di Fasilkom itu berbeda alias ga ada itungan dan isinya konsep doang. Menurutku matkul ini cukup seru, selain karena dosennya yang baik juga karena banyak hal baru yang aku dapet di matkul ini. Misalnya, persamaan polinomial dan matriks dapat dianggap sebagai vektor. Bingung kan? Nah makanya ambil Alin :).",
			"6. Statistika dan Probabilitas (Statprob)",
			"Nah kalau statprob ini adalah matkul di semester 4. Awalnya aku agak ragu buat ambil alin dan statprob bersamaan, soalnya bakal ada tiga matkul matematika (matdis 2, alin, statprob). Ini adalah matkul favoritku di semester 2 ini, materi yang diajarkan sangat menarik. Ada descriptive statistics, conditional probability, random variable, dan lain-lain. Kalo kata Bu Ika sih penerapan matkul ini bakal banyak dipake di Data Science dan Machine Learning (it made me more excited). Walaupun suka matkulnya bukan berarti aku jago hhhhh. Di matkul ini terdapat 5 tugas dan 6 kuis. Nah ini kuisnya masyaallah banget, dikasih waktu cuma 10 menit. Memang soal kuisnya ga banyak (sekitaran 5), tapi ya masa baca soal + mahamin + ngitung per soal waktunya cuma 2 menit kan agak tidak mungkin ya 🙂 (buat saya). Tapi alhamdulillah kemarin batas indeks huruf statprob diturunin 5 (>=80 buat A dst), kayaknya ini gara-gara nilai UTS-nya jelek-jelek banget wkwkwk (including mine).",
			"Secara keseluruhan semester 2 ini sangat seru, dengan segala kekurangannya (UAS full offline padahal kelas full online ckck). Terus aku juga ketemu banyak temen baru, ketemu temen lama yang udah kenal dari pas masih di kampus lama.",
			"Yaa itu aja buat semester 2 ini, wish me luck buat semester 3 🙂 see you in the next post.",
		],
		references: [""],
	},
];

async function main() {
	console.log(`Start seeding ...`);
	for (const p of postData) {
		const post = await prisma.post.create({
			data: p,
		});
		console.log(`Created post with id: ${post.id}`);
	}
	console.log(`Seeding finished.`);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
