package com.ein.agriculture_predictor.unit.service;

import com.ein.agriculture_predictor.model.User;
import com.ein.agriculture_predictor.repository.UserRepository;
import com.ein.agriculture_predictor.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class UserServiceTests {

    @InjectMocks
    private UserService userService;

    @Mock
    private UserRepository userRepository;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testSaveUser() {
        User user = new User();
        user.setUsername("John Doe");

        when(userRepository.save(any(User.class))).thenReturn(user);

        User savedUser = userService.saveUser(user);

        assertThat(savedUser).isNotNull();
        assertThat(savedUser.getUsername()).isEqualTo("John Doe");
        verify(userRepository, times(1)).save(user);
    }

    @Test
    public void testGetAllUsers() {
        User user1 = new User();
        user1.setUsername("Jane Doe");
        User user2 = new User();
        user2.setUsername("John Doe");

        when(userRepository.findAll()).thenReturn(Arrays.asList(user1, user2));

        List<User> users = userService.getAllUsers();

        assertThat(users).isNotNull();
        assertThat(users).hasSize(2);
        assertThat(users.get(0).getUsername()).isEqualTo("Jane Doe");
        assertThat(users.get(1).getUsername()).isEqualTo("John Doe");
        verify(userRepository, times(1)).findAll();
    }

    @Test
    public void testGetUserById_Found() {
        User user = new User();
        user.setUsername("Jane Doe");

        when(userRepository.findById(1L)).thenReturn(Optional.of(user));

        User foundUser = userService.getUserById(1L);

        assertThat(foundUser).isNotNull();
        assertThat(foundUser.getUsername()).isEqualTo("Jane Doe");
        verify(userRepository, times(1)).findById(1L);
    }

    @Test
    public void testGetUserById_NotFound() {
        when(userRepository.findById(1L)).thenReturn(Optional.empty());

        User foundUser = userService.getUserById(1L);

        assertThat(foundUser).isNull();
        verify(userRepository, times(1)).findById(1L);
    }

    @Test
    public void testDeleteUser() {
        Long userId = 1L;

        userService.deleteUser(userId);

        verify(userRepository, times(1)).deleteById(userId);
    }
}
