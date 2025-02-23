package com.ein.agriculture_predictor.service;

import com.ein.agriculture_predictor.model.User;
import com.ein.agriculture_predictor.repository.UserRepository;
import com.ein.agriculture_predictor.service.interfaces.IUserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IUserService {

    private static final Logger logger = LoggerFactory.getLogger(UserService.class);
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User saveUser(User user) {
        try {
            return userRepository.save(user);
        } catch (Exception e) {
            logger.error("Error while saving user: {}", user.getUsername(), e);
            throw e;
        }
    }

    @Override
    public List<User> getAllUsers() {
        try {
            return userRepository.findAll();
        } catch (Exception e) {
            logger.error("Error while fetching all users", e);
            throw e;
        }
    }

    @Override
    public User getUserById(Long id) {
        try {
            return userRepository.findById(id).orElse(null);
        } catch (Exception e) {
            logger.error("Error while fetching user with ID: {}", id, e);
            throw e;
        }
    }

    @Override
    public void deleteUser(Long id) {
        try {
            userRepository.deleteById(id);
        } catch (Exception e) {
            logger.error("Error while deleting user with ID: {}", id, e);
            throw e;
        }
    }
}
