# phpdev compose project

# 🇬🇧EN
The project to build up nginx, phpfpm, mysql, adminer by using docker-compose.
Php developers may use for getting started when get hired or moved up to another pc.

Requirements:
-   docker
-   docker-compose
-   git

TODO :
- clone the project from gitlab
- go to regarding folder with cd command and go with command :"sudo docker-compose up -d"

OUTPUT : 
- on localhost:8181, defaultly installed codeigniter project which is located in code folder may accessed.
- mysql is supposed to work over 3306 port.
- you may access to adminer to control out mysql databases with ui over 127.0.0.1:8080
    - to react at mysql with adminer
        -   server   : mysql
        -   username : root
        -   password : MYSQL_ROOT_PASSWORD variable that is defined in docker-compose.yml folder as a configuration parameter. The default value is sefaMerve2019!
- In case of want to change any config related to nginx, the default.conf file is located and mounted on the same folder with the project.

p.s. : You may stop it with "$sudo docker-compose down"
p.s. : Please stop service that may use ports those defined in docker-compose file such may : mysql, nginx or apache

Some more spesification :
- You may leave sql files into mysql-dump folder that you want to be imported in mysql. ci_sessions.sql table has already located as default for codeigniter session handling.

# 🇹🇷TR
Php developer işe başlarken kullanabileceği compose projesidir.

Gereksinimler :
- docker
- docker-compose
- git

Yapılması gerekenler :
- Proje git üzerinden çekilir
- cd komutu ile indirilen klasöre gidilir ve "sudo docker-compose up -d" komutu kullanılır

Çıktı :

- localhost:8181 üzerinden proje üzerinde code klasörünün içerisindeki default gelen codeigniter projesine erişilebilir.
- 3306 portu üzerinden mysql çalışıyor olacaktır.
- 127.0.0.1:8080 üzerinden adminera erişerek mysql üzerindeki veritabanlarını görsel arayüz ile kontrol edebilirsiniz.
    -   adminer üzerinden veritabanına ulaşabilmek için 
        -   server   : mysql
        -   username : root
        -   password : docker-compose.yml dosyasının içerisinde belirttiğiniz MYSQL_ROOT_PASSWORD değerinin karşılığıdır. Default olarak sefaMerve2019! belirtilmiştir.
- Gerektiği taktirde değişiklikleri yapabilmek amaçlı nginx configurasyon dosyası default.conf olarak klasörün içerisine mount edilmiştir.

not : "$sudo docker-compose down" ile durdurabilirsiniz.
not : kurulumdan önce lütfen fiziksel ortamda docker-compose.yml dosyasının içerisinde bulunan portları kullanan servisleri durdurun. Örn : mysql, nginx veya apache gibi

Biraz daha detay :
- Mysql içerisinde başlangıç için import etmek istediğiniz sql tablolarını, mysql-dump klasörüne bırakabilirsiniz. Default olarak codeigniter'ın session management için ihtiyaç duyduğu ci_session.sql tablosu bırakılmıştır.