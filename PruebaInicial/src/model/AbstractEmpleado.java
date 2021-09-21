package model;

import java.util.Objects;

import excepcionCustom.SueldoException;

public abstract class AbstractEmpleado implements IActualizarSueldo {
	private String nombre;
	private String dni;
	private String localidad;
	protected double sueldo;
	
	public AbstractEmpleado(String nombre, String dni, String localidad, double sueldo) throws SueldoException {
		super();
		this.nombre = nombre;
		this.dni = dni;
		this.localidad = localidad;
		
		if(sueldo>0) {
			this.sueldo=sueldo;
		}else {
			throw new SueldoException();
		}
		
	}

	public String getNombre() {
		return nombre;
	}

	public String getDni() {
		return dni;
	}

	public String getLocalidad() {
		return localidad;
	}
	
	

	public double getSueldo() {
		return sueldo;
	}


	@Override
	public int hashCode() {
		return Objects.hash(dni);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		AbstractEmpleado other = (AbstractEmpleado) obj;
		return Objects.equals(dni, other.dni);
	}

	@Override
	public String toString() {
		
		return "Nombre: "+this.getNombre()+" , DNI: "+this.getDni()+" , Localidad: "+this.getLocalidad();
	}
	
	
	
	
	
}
