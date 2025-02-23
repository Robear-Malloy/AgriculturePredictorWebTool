package com.ein.agriculture_predictor.repository;

import com.ein.agriculture_predictor.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}

