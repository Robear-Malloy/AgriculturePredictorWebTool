package com.ein.agriculture_predictor.service.interfaces;

import com.ein.agriculture_predictor.model.User;

import java.util.List;

public interface IUserService {
    User saveUser(User user);
    List<User> getAllUsers();
    User getUserById(Long id);
    void deleteUser(Long id);
}
