package com.ein.agriculture_predictor.controller.interfaces;

import com.ein.agriculture_predictor.model.User;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IUserController {
    ResponseEntity<User> createUser(User user);
    ResponseEntity<List<User>> getAllUsers();
}
