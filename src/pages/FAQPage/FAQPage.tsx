import { FunctionComponent} from "react";
import styles from "./FAQPage.css";
import Navbar from "../../components/navbar/Navbar";
const FAQPage: FunctionComponent = () => {
  return (
    <>
    <Navbar/>
    <div className={styles.faqContainer}>
      <div className={styles.faqTitle}>
        <h2>Tez-tez verilən suallar (FAQ)</h2>
      </div>
      <div className={styles.faqContent}>
        <div className={styles.faqItem}>
          <div className={styles["purple"]}>MOTO4 nədir?</div>
          <div className={styles.answer}>
            Moto4, maşın satışı dünyasında alıcıları və satıcıları birləşdirməyə
            həsr olunmuş ən yaxşı onlayn platformadır. Motosiklet, ATV, qar
            arabası və ya hər hansı digər maşın növü üçün bazarda olmağınızdan
            asılı olmayaraq, Moto4 rahat əməliyyatları asanlaşdırmaq üçün
            istifadəçi dostu və təhlükəsiz mühit təmin edir.
          </div>
        </div>
        <div className={styles.faqItem}>
          <div className={styles["purple"]}>MOTO4 necə işləyir?</div>
          <div className={styles.answer}>
            Moto4-da maşın satmaq və ya almaq çox asandır. Əvvəlcə, hesab
            yaradın. Sonra, maşınınızı əlavə edin və ya istədiyiniz maşını
            axtarın. Hər hansı bir maşın tapdıqda, satıcı ilə əlaqə qurun və
            əməliyyatı həyata keçirin.
          </div>
        </div>
        <div className={styles.faqItem}>
          <div className={styles["purple"]}>MOTO4-da hesab necə yaradılır?</div>
          <div className={styles.answer}>
            Hesab yaratmaq üçün, Moto4-da qeydiyyatdan keçməlisiniz. Bunun üçün
            "Qeydiyyat" düyməsinə basın və qeydiyyat formunu doldurun. Daha
            sonra e-poçt ünvanınıza göndərilən linkə basaraq hesabınızı
            aktivləşdirin. Hesabınız aktivləşdikdən sonra, hesabınıza daxil
            olaraq maşınınızı əlavə edə bilərsiniz.
          </div>
        </div>
        <div className={styles.faqItem}>
          <div className={styles["purple"]}>
            MOTO4-da maşın əlavə etmək necədir?
          </div>
          <div className={styles.answer}>
            Maşınınızı əlavə etmək üçün, hesabınıza daxil olun və "Maşın əlavə
            et" düyməsinə basın. Daha sonra, maşının məlumatlarını doldurun və
            maşının şəkillərini əlavə edin. Maşının əlavə edilməsi üçün
            təsdiqlənməsi gözlənilməlidir. Maşınınızı əlavə etdikdən sonra,
            maşın bazarda görünəcək.
          </div>
        </div>
        <div className={styles.faqItem}>
          <div className={styles["purple"]}>
            MOTO4-da maşın axtarmaq necədir?
          </div>
          <div className={styles.answer}>
            Maşın axtarmaq üçün, "Axtarış" düyməsinə basın və axtardığınız
            kriteriyaları doldurun. Daha sonra, axtardığınız maşınlar bazarda
            görünəcək. Axtardığınız maşınlarla tanış olmaq üçün, maşının şəklinə
            və ya adına basın.
          </div>
        </div>
        <div className={styles.faqItem}>
          <div className={styles["purple"]}>MOTO4-da maşın satmaq necədir?</div>
          <div className={styles.answer}>
            Maşın satmaq üçün, hesabınıza daxil olun və "Maşın əlavə et"
            düyməsinə basın. Daha sonra, maşının məlumatlarını doldurun və
            maşının şəkillərini əlavə edin. Maşının əlavə edilməsi üçün
            təsdiqlənməsi gözlənilməlidir. Maşınınızı əlavə etdikdən sonra,
            maşın bazarda görünəcək.
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default FAQPage;
