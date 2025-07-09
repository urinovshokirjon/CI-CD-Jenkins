package learning.center.uz;

import learning.center.uz.util.MD5Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class Application {


    public static void main(String[] args) {

        System.out.println(MD5Util.encode("12345"));

        SpringApplication.run(Application.class, args);
    }

}
