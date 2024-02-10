// Son las rutas que aparentemente solo los usuarios autenticados van a poder acceder 
import {Router} from 'express';
const router = Router();
import { deleteUser, getUserData, modifyUserNames, modifyUserPassword, testerRoute } from '../controllers/user.controller';
import {changeFolderName, createFolder, deleteUserFolders, deleteFolder, getUserFolders} from '../controllers/folder.controller';
import { createNote, deleteFolderNotes, deleteNoteById, deleteUserNotes, getFolderNotes, getNoFolderNotes, modifyNoteColor, modifyNoteContent, modifyNoteFolder, modifyNoteTitle,getFavoriteNotes,toggleFavoriteNote } from '../controllers/note.controller';
import passport from 'passport';

// User Routes
router.delete('/borrarusuario', passport.authenticate('jwt', {session: false}), deleteUser);

router.put('/modificarnombre', passport.authenticate('jwt', {session: false}), modifyUserNames);
router.put('/modificarcontraseña', passport.authenticate('jwt', {session: false}), modifyUserPassword);


router.get('/obtenerdatosusuario', passport.authenticate('jwt', {session: false}), getUserData);


router.post('/testerroute', passport.authenticate('jwt', {session: false}), testerRoute);


// Folder Routes
router.post('/crearcarpeta', passport.authenticate('jwt', {session: false}), createFolder);

router.put('/modificarnombrecarpeta', passport.authenticate('jwt', {session: false}), changeFolderName);


router.post('/obtenercarpetausuario', passport.authenticate('jwt', {session: false}), getUserFolders);
router.get('/obtenercarpetausuario', passport.authenticate('jwt', {session: false}), getUserFolders);

router.delete('/borrarcarpeta', passport.authenticate('jwt', {session: false}), deleteFolder);
router.delete('/borrartodaslascarpetas', passport.authenticate('jwt', {session: false}), deleteUserFolders);

// Note Routes
router.post('/crearnota',passport.authenticate('jwt', {session: false}), createNote);

// Were get requests but had to be changed at the last hour >:(
router.post('/obtenernotasdecarpeta/:folderId',passport.authenticate('jwt', {session: false}), getFolderNotes);
router.get('/obtenernotasdecarpeta/:folderId',passport.authenticate('jwt', {session: false}), getFolderNotes);


router.post('/obtenernotas',passport.authenticate('jwt', {session: false}), getNoFolderNotes);
router.get('/obtenernotas', passport.authenticate('jwt', {session: false}), getNoFolderNotes);



router.delete('/borrarnotaid',passport.authenticate('jwt', {session: false}), deleteNoteById);
router.delete('/borrarnotadecarpeta',passport.authenticate('jwt', {session: false}), deleteFolderNotes);
router.delete('/borrarnotasdeusuario',passport.authenticate('jwt', {session: false}), deleteUserNotes);

router.put('/modificartitulo', passport.authenticate('jwt', {session: false}), modifyNoteTitle);
router.put('/modificarcontenido', passport.authenticate('jwt', {session: false}), modifyNoteContent);
router.put('/modificarnotadecarpeta', passport.authenticate('jwt', {session: false}), modifyNoteFolder);

router.post('/togglefavorite/:noteId', passport.authenticate('jwt', { session: false }), toggleFavoriteNote);
router.get('/getFavoriteNotes', passport.authenticate('jwt', { session: false }), getFavoriteNotes);


export default router;