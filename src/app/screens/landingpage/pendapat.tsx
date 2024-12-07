import React from "react";

const Pendapat = () => {
  const testimonials = [
    {
      name: "Elgin Brian Wahyu Bramadhika",
      text: "Sejak menggunakan Edutech, cara belajar saya jadi jauh lebih menyenangkan! Saya juga bisa mengakses kelas kapan saja, jadi lebih fleksibel. Platform ini benar-benar mengubah cara saya belajar!",
      image: "/images/Group 8746.png", // Ganti dengan path gambar yang sesuai
      rating: 5,
    },
    {
      name: "Anak Agung Ngurah Aditya",
      text: "Sebagai pengajar, Edutech sangat membantu dalam mengelola kelas secara efektif. Saya bisa mengajar mereka sehingga kelas menjadi lebih interaktif dan siswa pun lebih antusias!",
      image: "/images/group 8747.png", // Ganti dengan path gambar yang sesuai
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-white font-manrope"> {/* Tambahkan jarak atas-bawah */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-black">
          {/* Tambahkan jarak bawah menjadi `mb-16` */}
          Apa Kata <span className="text-primary-50">Mereka?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] p-6 flex flex-col items-center relative min-h-[350px] pb-8 mb-16 shadow-[0px_4px_12px_rgba(0,0,0,0.1)]"
              // Rounded corner diubah menjadi 20px
            >
              <div className="flex mb-4 pt-3">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="h-6 w-6 text-yellow-500"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.978 1.432 8.249L12 18.896l-7.368 4.637 1.432-8.249-6.064-5.978 8.332-1.151z" />
                    </svg>
                  ))}
              </div>
              <h3 className="font-bold text-gray-800 mb-4 text-xl md:text-2xl">
                {testimonial.name}
              </h3>
              <p className="text-gray-700 text-center mb-4 text-base md:text-lg lg:text-xl">
                {testimonial.text}
              </p>
              <div className="absolute -bottom-16">
                {/* Perbesar ukuran gambar */}
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-32 h-32 object-cover rounded-full border-4 border-white"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pendapat;
