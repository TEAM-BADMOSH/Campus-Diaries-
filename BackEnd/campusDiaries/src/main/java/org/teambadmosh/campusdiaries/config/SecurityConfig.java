package org.teambadmosh.campusdiaries.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;

import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors(cors -> cors.configurationSource(request -> {
                    CorsConfiguration config = new CorsConfiguration();
                    config.setAllowedOrigins(List.of("http://localhost:5173"));// Allow frontend
                    config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
                    config.setAllowedHeaders(List.of("*"));
                    config.setAllowCredentials(true); // ✅ Allow credentials (cookies)

                    return config;
                }))

                .csrf(AbstractHttpConfigurer::disable) // Disable CSRF (optional)
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/login", "/register").permitAll()
                        .requestMatchers("/query/**").permitAll()
                        .requestMatchers("/users/userDetails").authenticated()
                        .anyRequest().authenticated()
                )
//                .formLogin(login -> login
//
//                        .defaultSuccessUrl("/user", true)) // Redirect after login
                .httpBasic(Customizer.withDefaults())
//                .logout(logout -> logout.logoutUrl("/logout").logoutSuccessUrl("http://localhost:5173/login")) // Logout handler
                .formLogin(form -> form
                        .loginPage("http://localhost:5173/login") // Your custom login page URL
                        .loginProcessingUrl("/login") // Spring Security's default login processing URL
                        .defaultSuccessUrl("/user", true) // Redirect after login
                        .failureUrl("http://localhost:5173/login?error=true") // Redirect on failure
                )
                .logout(logout -> logout
                        .logoutUrl("/logout")
                        .logoutSuccessUrl("http://localhost:5173/login")
                        .invalidateHttpSession(true)
                        .deleteCookies("JSESSIONID")
                )
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED)); // Enable session-based auth

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(); // Encrypts passwords
    }

}
