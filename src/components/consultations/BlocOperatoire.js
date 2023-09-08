import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ChallengeComponet from '../Examen/challenge/ChallengeComponet';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const BlocOperatoire = () => {
    // The empty dependency array ensures this effect runs only once on mount
    let listeItem = "";
    const [formData, setFormData] = useState({
        typePatient: '',
        reference: '',
        age: '',
        firstName: '',
        lastName: '',
        sexe: '',
        symptome: '',
        examen: '',
        observation: '',
        diagnostique: '',
    });

    //placeholde

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        const jsonData = JSON.stringify(formData);
        console.log(jsonData);
    };

    const selectedItem = (a) => {

        if (listeItem.length > 0) {
            listeItem = listeItem + " , " + a;
        } else {
            listeItem = a;
        }
        console.log("ELECTED ELEMENT ", listeItem)
        setFormData({ ...formData, ["diagnostique"]: listeItem });

    }

    return (
        <Box sx={{
            marginLeft: 2,
            marginRight: 5,
            marginTop: 2,
        }}>
            <Grid container spacing={3}>

                <Grid item xs={4}>
                    <Grid container spacing={2}>

                        <Grid item xs={12} sm={6} md={6}>
                            <FormControl fullWidth size="small">
                                {/* <InputLabel>Nom</InputLabel> */}
                                <TextField
                                    label="Nom"
                                    variant="outlined"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    fullWidth
                                    size="small" // Taille réduite (small)
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <FormControl fullWidth size="small">
                                {/* <InputLabel>Prénom</InputLabel> */}
                                <TextField
                                    label="Prénom"
                                    variant="outlined"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    fullWidth
                                    size="small" // Taille réduite (small)
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <FormControl fullWidth size="small">
                                <InputLabel>Age</InputLabel>
                                <Select
                                    label="Select an option"
                                    value={formData.age}
                                    onChange={handleInputChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="< 5 ans">  Inérieur à 5 ans</MenuItem>
                                    <MenuItem value="> 5 ans"> Supérieur à 5 ans</MenuItem>

                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <FormControl fullWidth size="small">
                                <InputLabel>Sexe</InputLabel>
                                <Select
                                    label="Select an option"
                                    value={formData.reference}
                                    onChange={handleInputChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="Homme">Homme</MenuItem>
                                    <MenuItem value="Femme">Femme</MenuItem>

                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <FormControl fullWidth size="small">
                                <InputLabel>Type du Patient</InputLabel>
                                <Select
                                    label="Select an option"
                                    value={formData.typePatient}
                                    onChange={handleInputChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="NC">NC</MenuItem>
                                    <MenuItem value="AC">AC</MenuItem>

                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <FormControl fullWidth size="small">
                                <InputLabel>Référence</InputLabel>
                                <Select
                                    label="Select an option"
                                    value={formData.reference}
                                    onChange={handleInputChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="NC">NC</MenuItem>
                                    <MenuItem value="AC">AC</MenuItem>

                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                            <FormControl fullWidth size="small">
                                {/* <InputLabel>Symptôme</InputLabel> */}
                                <TextField
                                    label="Symptôme"
                                    variant="outlined"
                                    name="symptome"
                                    value={formData.symptome}
                                    onChange={handleInputChange}
                                    fullWidth
                                    size="small" // Taille réduite (small)
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <FormControl fullWidth size="small">
                                {/* <InputLabel>Examen</InputLabel> */}
                                <TextField
                                    label="Examen"
                                    variant="outlined"
                                    name="examen"
                                    value={formData.examen}
                                    onChange={handleInputChange}
                                    fullWidth
                                    size="small" // Taille réduite (small)
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <FormControl fullWidth size="small">
                                {/* <InputLabel>Diagnostique</InputLabel> */}
                                <TextField
                                    label="Diagnostique"
                                    variant="outlined"
                                    name="diagnostique"
                                    value={formData.diagnostique}
                                    onChange={handleInputChange}
                                    fullWidth
                                    size="small" // Taille réduite (small)
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <FormControl fullWidth size="small">
                                {/* <InputLabel>Observation</InputLabel> */}
                                <TextField
                                    label="Observation"
                                    variant="outlined"
                                    name="observation"
                                    value={formData.observation}
                                    onChange={handleInputChange}
                                    fullWidth
                                    size="small" // Taille réduite (small)
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <FormControl fullWidth size="small">
                                {/* <InputLabel>Traitement</InputLabel> */}
                                <TextField
                                    label="Traitement"
                                    variant="outlined"
                                    name="traitement"
                                    value={formData.traitement}
                                    onChange={handleInputChange}
                                    fullWidth
                                    size="small" // Taille réduite (small)
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                            <FormControl fullWidth>
                                <Button variant="contained" color="primary" onClick={handleSave}>
                                    Enregistrer
                                </Button>
                            </FormControl>

                        </Grid>
                    </Grid>

                </Grid>

                <Grid item xs={8} sx={{
                    overflow: 'auto',

                }}>
                    <ChallengeComponet selectedItem={selectedItem} />
                </Grid>
            </Grid>

        </Box>
    );
};

export default BlocOperatoire;


