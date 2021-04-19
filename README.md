# Web-Indexing



Kullanılan tarayıcıya Moesif CORS uzantısı eklenmesi gerekmektedir.
Dosya, kullanılan IDE'ye göre import edilerek index0.html dosyası seçilerek tarayıcıda çalıştırılmalıdır.
Her aşama için oluşturulmuş butonlara tıklayarak işlemi gerçekleştirebilirsiniz .















Anasayfa
 
 
<img src= "https://user-images.githubusercontent.com/46785635/115252571-41d85500-a134-11eb-8f97-15f2735725a2.jpeg" width=400>


1.	Frekans Hesaplama:
  Girilen bir URL icin: 
    •	URL iceriginde (URL’in gosterdigi sayfa iceriginde) her kelimenin kacar defa yer aldigi sonucu (frekansı) hesaplanmıştır.


   <img src= "https://user-images.githubusercontent.com/46785635/115253619-39344e80-a135-11eb-844d-26a0852a96e5.jpeg" width=400>


2.Anahtar Kelime Çıkarma:

   Verilen URL bilgisini almak için oluşturulan text alanına kullanıcı tarafından girilen adrese ulaşarak bu adreste bulunan metinde en çok tekrar eden kelimeler, bağlaç olmayan       ve kelime uzunluğu ikiden fazla olarak belirlenen 10 anahtar kelime yazdırılmıştır.


   <img src= "https://user-images.githubusercontent.com/46785635/115254477-0f2f5c00-a136-11eb-936f-29964ed66fab.jpeg" width=300>
   
   
3. Benzerlik Skorlaması:

  Kullanıcından alınan 2 URL için ilk girilen ana URL içeriğine ulaşılarak anahtar kelimelerin çıkarılmasıyla ikinci girilen URL içerisinde bu anahtar kelimelerin         frekanslarına göre bir skor hesaplanmıştır. 
  Bu hesaplamada kullanılan formül ise ana url içerindeki anahtar kelimelerin frekans toplamları F1,ana url içerisindeki toplam kelime frekansları F2, ikinci girilen URL           adresteki ana URL ile belirlediğimiz anahtar kelimelerin bu adresteki frekanslarının toplamı F3, ikinci URL adresinde bulunan toplam kelime frekansları F4 ise skor hesabı:


  100*((100*(F3))/F4))/((100*(F1))/F2)  olarak hesaplanır.


  <img src= "https://user-images.githubusercontent.com/46785635/115254782-5b7a9c00-a136-11eb-94d8-4519c51832af.jpeg" width=300>
 
 
4.Site İndexleme Ve Sıralama:

Kullanıcıdan ana URL ve web kümesi alınarak, ana URL için anahtar kelime çıkarma işlemi yapılmıştır. Web kümesinde bulunan her bir link için, bu linklerin içeriğinden alınan max 5 adet link ve bu 5 adet linkinde her birinin içerisinden yine max 5 adet link alınarak web kümesindeki her bir link için toplam 30 link olacak şekilde derinlik oluşturulmuştur. Ana URL içerisindeki anahtar kelimeler, web kümesindeki her bir link, oluşturulan derinlik ile elde edilen linklerde dahil edilerek frekans bilgileri, benzerlik skorlamasında gerçekleştirilen formül kullanılarak hesaplanmıştır. Bu skorlara göre web kümesi linkleri sıralanmıştır.



   <img src= "https://user-images.githubusercontent.com/46785635/115256005-844f6100-a137-11eb-8749-d7e9b7567386.jpeg" width=300>
 
 
 
  5. Semantik Analiz


Kullanıcıdan ana URL ve web kümesi alınarak, ana URL için anahtar kelime çıkarma işlemi yapılmıştır.Anahtar kelimelerin eş anlamlıları synonyms.txt dosyasında arama işlemi yapılarak bu dosyada bulunan kelimelerin eş anlamlıları da anahtar kelime dizisine eklenerek gösterilmiştir. Site indexleme ve sıralama isterinde yapılan tüm işlemler bu anahtar kelimeler dizisi içinde yapılarak sonuçları ekrana yansıtılmıştır.
 
 
 <img src= "https://user-images.githubusercontent.com/46785635/115266649-0d1eca80-a141-11eb-982e-8826aff0ce4c.jpeg" width=300>
 
  
  

