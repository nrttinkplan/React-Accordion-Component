const data = [
    {
        id : "1",
        question : "Accordion component nedir?",
        answer : "Accordion Component (Akordeon Bileşeni), React veya diğer frontend framework’lerinde sıkça kullanılan bir UI bileşenidir. Accordion, bir liste veya grup öğelerini başlıklar altında gizleyip göstermek için kullanılır. Her başlık tıklandığında, ilgili içerik genişler veya daralır."
    },
    {
        id : "2",
        question : "Accordion component nasıl çalışır?",
        answer : "Accordion genellikle useState gibi bir durum yönetimi yöntemi kullanarak açılıp kapanan bölümler oluşturur. Başlığa tıklanınca ilgili içeriğin durumu değişir ve görünürlüğü kontrol edilir."
    },
    {
        id : "3",
        question : "Accordion kullanmanın avantajları nelerdir?",
        answer : "Accordion, sayfa düzenini sadeleştirir, fazla içeriği gizleyerek kullanıcı deneyimini iyileştirir ve gereksiz kaydırmaları (scroll) azaltır. Özellikle SSS (Sıkça Sorulan Sorular) gibi içeriklerde tercih edilir."
    },
    {
        id : "4",
        question : " Accordion içindeki birden fazla bölüm aynı anda açık kalabilir mi?",
        answer : "Evet, accordion bileşeni isteğe bağlı olarak yapılandırılabilir. Tek seferde yalnızca bir bölümün açık kalmasını istiyorsanız “tek seçimli” modda kullanabilirsiniz, ancak tüm bölümlerin aynı anda açık kalmasını isterseniz bağımsız state yönetimi ile bunu sağlayabilirsiniz."
    },

];

export default data;