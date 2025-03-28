package com.ein.agriculture_predictor.unit.controller;

import com.ein.agriculture_predictor.model.User;
import com.ein.agriculture_predictor.service.UserService;
import com.ein.agriculture_predictor.controller.UserController;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Collections;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class UserControllerTest {

    @InjectMocks
    private UserController userController;

    @Mock
    private UserService userService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testCreateUser() {
        User user = new User();
        user.setUsername("John Doe");

        when(userService.saveUser(any(User.class))).thenReturn(user);

        ResponseEntity<User> response = userController.createUser(user);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        assertThat(response.getBody().getUsername()).isEqualTo("John Doe");
    }

    @Test
    public void testGetAllUsers() {
        User user = new User();
        user.setUsername("Jane Doe");
        List<User> users = Collections.singletonList(user);

        when(userService.getAllUsers()).thenReturn(users);

        ResponseEntity<List<User>> response = userController.getAllUsers();

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody()).hasSize(1);
        assertThat(response.getBody().get(0).getUsername()).isEqualTo("Jane Doe");
    }
}

