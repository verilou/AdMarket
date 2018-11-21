<?php

namespace App\Controller;

use App\Form\AdvertiserType;
use App\Entity\Advertiser;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AdvertiserController extends AbstractController
{
    /**
     * @Route("/login", name="app_login")
     */
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
    }

    /**
     * @Route("/register", name="app_register")
     */
    public function register(Request $request, UserPasswordEncoderInterface $passwordEncoder)
    {
        // 0.5) Convert JSON data
        $data = json_decode($request->getContent(), true);
        
        // 1) build the form
        $user = new Advertiser();
        $form = $this->createForm(AdvertiserType::class, $user);
        if (!empty($data)) {
            # code...
            $form->submit($data);
            if($form->isValid()){
                // 3) Encode the password (you could also do this via Doctrine listener)
                $password = $passwordEncoder->encodePassword($user, $user->getPassword());
                $user->setPassword($password);
                
                // 4) save the User!
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($user);
                $entityManager->flush();
                
                // ... do any other work - like sending them an email, etc
                // maybe set a "flash" success message for the user
                
                return new Response('It worked. Believe me - I\'m an API', 201);  
            }
            foreach($form->getErrors(true, false) as $er) {
                dump($er);
            }
        }
        return new Response('wrong2', 401);  

    }

    /**
     * @Route("/profile", name="my_profile")
     */
    public function profile(){
        $user = $this->getUser();
        dump($user);
        return $this->render(
            'advertiser/profile.html.twig',
            array(
                'user_email' => $user->getEmail(),
                'user_id' => $user->getId(),
                'user_roles' => $user->getRoles()
            )
        );

    }
}
