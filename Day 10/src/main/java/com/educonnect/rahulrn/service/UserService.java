package com.educonnect.rahulrn.service;

import java.security.Principal;
import java.util.List;

import com.educonnect.rahulrn.dto.request.PasswordRequest;
import com.educonnect.rahulrn.dto.request.ProfileRequest;
import com.educonnect.rahulrn.dto.response.ProfileResponse;
import com.educonnect.rahulrn.model.Courses;
import com.educonnect.rahulrn.model.Institutes;

public interface UserService {

    void forgotPassword(PasswordRequest request, Principal principal);

    //Student profile

    public ProfileResponse addProfile(ProfileRequest profileRequest, int id);

    public ProfileResponse deleteProfile(int id);

    public ProfileRequest getProfile(int id);

    public void updateProfile(ProfileRequest profile, int id);

    //Institues

    public Institutes addInstitues(Institutes institutes);

    public List<Institutes> getAllInstitutes();

    public void deleteInstitutes(int id);

    public Institutes updateInstitutes(Institutes institutes, int id);

    public Courses addCourses(Courses courses);

    public Courses updateCourses(Courses courses, int id);

    public List<Courses> getAllCourses();

    public void deleteCourses(int id);

}